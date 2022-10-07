import { Injectable } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { UserEntity } from 'src/entity/user.entity';
import { DataEntity } from 'src/entity/userdata.entity';

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

  updatePost(userData: DataEntity, id: number): Observable<UpdateResult> {
    // const user: User = new UserEntity();
    // user.id = id;
    return from(this.userDataRepository.update(id, userData));
  }

  findAllPosts(userdataId: any): Observable<DataEntity[]> {
    return from(this.userDataRepository.find(userdataId));
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
}
