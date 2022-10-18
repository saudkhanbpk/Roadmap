import { HttpException, Injectable } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult, getRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { UserEntity } from 'src/entity/user.entity';
import { DataEntity } from 'src/entity/userdata.entity';
import { User } from 'src/enterfaces/user.class';
import { UserData } from 'src/enterfaces/userdata.model';
import { userdataDto } from 'src/dtos/userdatdtos';
import { format } from 'path';
import { CardsEntity } from 'src/entity/cards.entity';

@Injectable()
export class DataService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @InjectRepository(DataEntity)
    private userDataRepository: Repository<DataEntity>,
  ) {}
  async create(data: any): Promise<UserData> {
    return this.userRepository.save(data);
  }
  async findOne(condition: any): Promise<UserData> {
    return this.userDataRepository.findOne(condition);
  }

  creatdate(userData: DataEntity): Observable<DataEntity> {
    return from(this.userDataRepository.save(userData));
  }

  // async updatePost(userData: userdataDto, id: any): Promise<UserData> {
  //   // const updatedata: UserData = { userData };
  //   this.userDataRepository.findOne({ where: { id: id } });
  //   const updateddata: UserData = { id: id, ...userData };
  //   const newdata = await this.userDataRepository.save(updateddata);
  //   return newdata;
  // }

  // updatePost(userData: userdataDto, id: number): Promise<UserData> {
  //   // if (isEmpty(productData)) throw new HttpException(400, "You're not productData");
  //   // const productRepo: Repository<ProductEntity> = getRepository(ProductEntity);
  //   // const findProduct: UserData = this.userDataRepository.findOne({
  //   //   where: { id: id },
  //   // });
  //   // if (!findProduct) {
  //   //   throw new HttpException(`Your product does not exist`, 409);
  //   // } else {
  //   // }
  //    const newdata = this.userDataRepository.update(userData, id);
  //   const updatecProductData: UserData = {
  //     id: id,
  //     ...userData,
  //     // userId: userId,
  //   };
  //   const savedProduct = this.userDataRepository.save(updatecProductData);
  //   return savedProduct;
  // }

  updatePost(userData: userdataDto, id: number): Observable<UpdateResult> {
    return from(this.userDataRepository.update(id, userData));
  }
  // updatecard(cardData: CardDto, id: number): Observable<UpdateResult> {
  //   return from(this.userDataRepository.update(id, userData));
  // }

  public async findAllPosts(): Promise<UserData[]> {
    // const alluserdata: Repository<DataEntity> = getRepository(DataEntity);
    // const userdata: UserData[] = await alluserdata.find();
    const userdata: UserData[] = await this.userDataRepository.find();
    return userdata;
  }

  findRoadmapById(roadMapId: any): Observable<DataEntity> {
    // return from(this.userDataRepository.findOne(roadMapId));
    return from(this.userDataRepository.findOne({ where: { id: roadMapId } }));
  }

  deleteRoadMap(id: number): Observable<DeleteResult> {
    // const apartmentTypeRepo: Repository<UserEntity> = getRepository(CartEntity);
    return from(this.userDataRepository.delete(id));
  }

  // updateUserImageById(id: number, imagePath: string): Observable<UpdateResult> {
  //   const user: User = new UserEntity();
  //   user.id = id;
  //   user.imagePath = imagePath;
  //   return from(this.userRepository.update(id, user));
  // }
}
