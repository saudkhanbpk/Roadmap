import { Injectable } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { BoardsEntity } from 'src/entity/board.entity';
import { ContentEntity } from 'src/entity/content.entity';
import { ContentI } from 'src/enterfaces/content.model';

@Injectable()
export class ContentService {
  constructor(
    @InjectRepository(BoardsEntity)
    private contentRepo: Repository<ContentEntity>,
  ) {}

  //   findRoadmapById(roadMapId: any): Observable<BoardsEntity> {
  //     // return from(this.userDataRepository.findOne(roadMapId));
  //     return from(this.userDataRepository.findOne({ where: { id: roadMapId } }));
  //   }

  //   deleteRoadMap(key: number): Observable<DeleteResult> {
  //     // const apartmentTypeRepo: Repository<UserEntity> = getRepository(CartEntity);
  //     return from(this.userDataRepository.delete(key));
  //   }

  createContent(content: ContentEntity): Observable<ContentEntity> {
    return from(this.contentRepo.save(content));
  }

  public async getAllContent(): Promise<ContentI[]> {
    const userdata: ContentI[] = await this.contentRepo.find();
    return userdata;
  }

  // updateUserImageById(id: number, imagePath: string): Observable<UpdateResult> {
  //   const user: User = new UserEntity();
  //   user.id = id;
  //   user.imagePath = imagePath;
  //   return from(this.userRepository.update(id, user));
  // }
}
