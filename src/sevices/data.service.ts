import { Injectable } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DataEntity } from 'src/entity/userdata.entity';
import { UserData } from 'src/enterfaces/userdata.model';
import { userdataDto } from 'src/dtos/userdatdtos';

@Injectable()
export class DataService {
  constructor(
    @InjectRepository(DataEntity)
    private userDataRepository: Repository<DataEntity>,
  ) {}
  creatdate(userData: DataEntity): Observable<DataEntity> {
    return from(this.userDataRepository.save(userData));
  }

  updatePost(userData: userdataDto, id: number): Promise<UserData> {
    const updatecProductData: UserData = {
      id: id,
      ...userData,
    };
    updatecProductData.id = Number(id);
    const savedProduct = this.userDataRepository.save(updatecProductData);
    return savedProduct;
  }

  public async findAllPosts(): Promise<UserData[]> {
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
