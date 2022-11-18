import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { CloudinaryService } from './cloudinary/cloudinary.service';
import { sendMail } from './utils/SendEmails';
import { createConfirmEmailLink } from './utils/ConfirmEmail';
import { redis } from './Redis';
import { Response } from 'express';
import { CONFIRM_EMAIL_PREFIX } from './Constants';
@Injectable()
export class AppService {
  constructor(
    private cloudinary: CloudinaryService,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}
  async create(data: any): Promise<UserEntity> {
    // return this.userRepository.save(data);
    const user = await this.userRepository.save(data);
    const link = await createConfirmEmailLink(user.id);
    await sendMail(user.email, link);
    return user;
  //   const User =
  //      this.userRepository.save(data);
  //  await sendMail(data.email, await createConfirmEmailLink(data.id));
  //   return null;



  }

  async confirmEmail(id: number, res: Response) {
    let userId: number = parseInt(await redis.get(`${CONFIRM_EMAIL_PREFIX}${id}`));
    // userId = parseInt(userId);
    if (!userId) {
      throw new BadRequestException('Invalid Link');
    }
    await this.userRepository.update({ id: userId }, { confirmed: true });
    res.send(
      `<h1 style="text-align: center; margin-top: 100px;">Email Confirmed</h1>`,


    );

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
