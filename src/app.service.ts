import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { CloudinaryService } from './cloudinary/cloudinary.service';

@Injectable()
export class AppService {
  constructor(
    private cloudinary: CloudinaryService,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}
  async create(data: any): Promise<UserEntity> {
    return this.userRepository.save(data);
  }
  async findOne(condition: any): Promise<UserEntity> {
    return this.userRepository.findOne(condition);
  }

  async uploadImageToCloudinary(file: Express.Multer.File) {
    const uploadimages = await this.cloudinary.uploadImage(file).catch(() => {
      throw new BadRequestException('Invalid file type.');
    });
    console.log(uploadimages.url);
    return uploadimages;
  }
}
