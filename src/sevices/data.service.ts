import { HttpException, Injectable } from '@nestjs/common';
// import { UserEntity } from './user.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { UserEntity } from 'src/entity/user.entity';
import { DataEntity } from 'src/entity/userdata.entity';
import { UserData } from 'src/enterfaces/data.model';
import { UserNewTask } from 'src/enterfaces/task.model';
import { User } from 'src/enterfaces/user.class';
import { NewTaskEntity } from 'src/entity/taske.entity';

@Injectable()
export class DataService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @InjectRepository(DataEntity)
    private userDataRepository: Repository<DataEntity>,
    @InjectRepository(NewTaskEntity)
    private userNewDataRepository: Repository<NewTaskEntity>,
  ) {}
  async create(data: any): Promise<UserEntity> {
    return this.userRepository.save(data);
  }
  async findOne(condition: any): Promise<UserEntity> {
    return this.userRepository.findOne(condition);
  }

  datePost(user: User, userData: any): Observable<UserData> {
    userData.author = user;
    return from(this.userDataRepository.save(userData));
  }

  findAllPosts(userdataId: any): Observable<DataEntity[]> {
    return from(this.userDataRepository.find(userdataId));
  }
  findAllnewPosts(userNewDataId: any): Observable<NewTaskEntity[]> {
    return from(this.userNewDataRepository.find(userNewDataId));
  }

  findRoadmapById(roadMapId: any): Observable<DataEntity> {
    // return from(this.userDataRepository.findOne(roadMapId));
    return from(this.userDataRepository.findOne({ where: { id: roadMapId } }));
  }

  updatePost(UserData: DataEntity, id: number): Observable<UpdateResult> {
    const user: User = new UserEntity();
    user.id = id;
    return from(this.userDataRepository.update(id, UserData));
  }
  // updatenewdatePost(
  //   UserNewTask: NewTaskEntity,
  //   id: number,
  // ): Observable<UpdateResult> {
  //   const user: User = new UserEntity();
  //   user.id = id;
  //   return from(this.userNewDataRepository.update(id, UserNewTask));
  // }

  // newdatePost(userNewTask: UserNewTask): Observable<UserNewTask> {
  //   return from(this.userNewDataRepository.save(userNewTask));
  // }

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
