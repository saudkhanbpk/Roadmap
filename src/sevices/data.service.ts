import { Injectable } from '@nestjs/common';
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
  async create(data: any): Promise<UserEntity> {
    return this.userRepository.save(data);
  }
  async findOne(condition: any): Promise<DataEntity> {
    return this.userDataRepository.findOne(condition);
  }

  creatdate(userData: DataEntity): Observable<DataEntity> {
    return from(this.userDataRepository.save(userData));
  }

  updatePost(userData: userdataDto, id: any): Observable<UpdateResult> {
    // const updatedata: UserData = { userData };
    // const newdata = this.userDataRepository.update(userData, id);
    return from(this.userDataRepository.update(userData, id));
  }

  // updatePost(userData: DataEntity, id: number): Observable<UpdateResult> {
  //   // const user: User = new UserEntity();
  //   // user.id = id;
  //   return from(this.userDataRepository.update(id, userData));
  // }

  // public async findAllPosts(): Promise<UserData[]> {
  //   const alluserdata: Repository<DataEntity> = getRepository(DataEntity);
  //   const Alluserdata: UserData[] = await alluserdata.find();
  //   return Alluserdata;
  //   // return from(this.userDataRepository.find(userdataId));
  // }

  public async findAllPosts(): Promise<UserData[]> {
    // const alluserdata: Repository<DataEntity> = getRepository(DataEntity);
    // const userdata: UserData[] = await alluserdata.find();
    const userdata: UserData[] = await this.userDataRepository.find();
    return userdata;
    // return from(this.userDataRepository.find());
  }

  findRoadmapById(roadMapId: any): Observable<DataEntity> {
    // return from(this.userDataRepository.findOne(roadMapId));
    return from(this.userDataRepository.findOne({ where: { id: roadMapId } }));
  }

  deleteRoadMap(id: number): Observable<DeleteResult> {
    // const apartmentTypeRepo: Repository<UserEntity> = getRepository(CartEntity);
    return from(this.userDataRepository.delete(id));

    // const roadMap: UserData = this.userDataRepository.findOne({
    //   id: id,
    // });

    // if (!roadMap)
    //   throw new HttpException(409, `Apartment Type not found for ${id}`);
    // this.userDataRepository.delete(id);
    // return roadMap;
  }

  // updateUserImageById(id: number, imagePath: string): Observable<UpdateResult> {
  //   const user: User = new UserEntity();
  //   user.id = id;
  //   user.imagePath = imagePath;
  //   return from(this.userRepository.update(id, user));
  // }
}
