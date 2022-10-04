import { HttpException, Injectable } from '@nestjs/common';
// import { UserEntity } from './user.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { UserData } from './enterfaces/data.model';
// import { UserNewTask } from './enterfaces/task.model';
import { User } from './enterfaces/user.class';
// import { NewTaskEntity } from './entity/taske.entity';
import { UserEntity } from './entity/user.entity';
import { DataEntity } from './entity/userdata.entity';
import { TaskEntity } from './entity/taske.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @InjectRepository(DataEntity)
    private userDataRepository: Repository<DataEntity>,
    @InjectRepository(TaskEntity)
    private userNewDataRepository: Repository<TaskEntity>,
  ) {}
  async create(data: any): Promise<UserEntity> {
    return this.userRepository.save(data);
  }
  async findOne(condition: any): Promise<UserEntity> {
    return this.userRepository.findOne(condition);
  }

  // findAllPosts(userdataId: any): Observable<DataEntity[]> {
  //   return from(this.userDataRepository.find(userdataId));
  // }
  // findAllnewPosts(userNewDataId: any): Observable<NewTaskEntity[]> {
  //   return from(this.userNewDataRepository.find(userNewDataId));
  // }

  // findRoadmapById(roadMapId: any): Observable<DataEntity> {
  //   // return from(this.userDataRepository.findOne(roadMapId));
  //   return from(this.userDataRepository.findOne({ where: { id: roadMapId } }));
  // }

  // updatePost(UserData: DataEntity, id: number): Observable<UpdateResult> {
  //   const user: User = new UserEntity();
  //   user.id = id;
  //   return from(this.userDataRepository.update(id, UserData));
  // }
  // updatenewdatePost(
  //   UserNewTask: NewTaskEntity,
  //   id: number,
  // ): Observable<UpdateResult> {
  //   const user: User = new UserEntity();
  //   user.id = id;
  //   return from(this.userNewDataRepository.update(id, UserNewTask));
  // }

  // datePost(userData: UserData): Observable<UserData> {
  //   return from(this.userDataRepository.save(userData));
  // }

  // deleteRoadMap(id: number): Observable<DeleteResult> {
  //   // const apartmentTypeRepo: Repository<UserEntity> = getRepository(CartEntity);
  //   return from(this.userDataRepository.delete(id));

  //   // const roadMap: UserData = this.userDataRepository.findOne({
  //   //   id: id,
  //   // });

  //   // if (!roadMap)
  //   //   throw new HttpException(409, `Apartment Type not found for ${id}`);
  //   // this.userDataRepository.delete(id);
  //   // return roadMap;
  // }
}
