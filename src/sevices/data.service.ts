import { Injectable, Res } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { BoardsEntity } from 'src/entity/board.entity';
import { Board } from 'src/enterfaces/board.model';
import { BoardsDto } from 'src/dtos/boarddto';

@Injectable()
export class DataService {
  constructor(
    @InjectRepository(BoardsEntity)
    private userDataRepository: Repository<BoardsEntity>,
  ) {}
  async creatdate(userData: BoardsDto): Promise<Board> {
    const boards = await this.userDataRepository.save(userData);
    return boards;
  }

  updatePost(userData: BoardsDto, id: number): Promise<Board> {
    const updatecProductData: Board = {
      id: id,
      ...userData,
    };
    updatecProductData.id = Number(id);
    const savedProduct = this.userDataRepository.save(updatecProductData);
    return savedProduct;
  }

  public async findAllPosts(): Promise<Board[]> {
    const userdata: Board[] = await this.userDataRepository.find();
    return userdata;
  }

  findRoadmapById(roadMapId: any): Observable<BoardsEntity> {
    // return from(this.userDataRepository.findOne(roadMapId));
    return from(this.userDataRepository.findOne({ where: { id: roadMapId } }));
  }

  deleteRoadMap(id: number): Observable<DeleteResult> {
    // const apartmentTypeRepo: Repository<UserEntity> = getRepository(CartEntity);
    console.log(id, ': id');
    return from(this.userDataRepository.delete(id));
  }

  // updateUserImageById(id: number, imagePath: string): Observable<UpdateResult> {
  //   const user: User = new UserEntity();
  //   user.id = id;
  //   user.imagePath = imagePath;
  //   return from(this.userRepository.update(id, user));
  // }
}
