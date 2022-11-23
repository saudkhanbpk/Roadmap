import {
  BadRequestException,
  Injectable,
  CACHE_MANAGER,
  Inject,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { CloudinaryService } from './cloudinary/cloudinary.service';
import { sendMail } from './utils/SendEmails';
import { ConfirmEmailService } from './utils/ConfirmEmail';
import { redis } from './Redis';
import { Response } from 'express';
import { CONFIRM_EMAIL_PREFIX } from './Constants';
import { Cache } from 'cache-manager';
@Injectable()
export class AppService {
  constructor(
    private cloudinary: CloudinaryService,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private confirmEmails: ConfirmEmailService,
  ) {}
  async create(data: any): Promise<UserEntity> {
    // return this.userRepository.save(data);
    const user = await this.userRepository.save(data);
    const link = await this.confirmEmails.createConfirmEmailLink(user.id);
    await sendMail(user.email, link);
    return user;
    //   const User =
    //      this.userRepository.save(data);
    //  await sendMail(data.email, await createConfirmEmailLink(data.id));
    //   return null;
  }

  async confirmEmail(id: number, res: Response) {
    let userId: number = parseInt(
      await this.cacheManager.get(`${CONFIRM_EMAIL_PREFIX}${id}`),
    );
    console.log(await this.cacheManager.get(`${CONFIRM_EMAIL_PREFIX}${id}`));
    // userId = parseInt(userId);
    if (!userId) {
      throw new BadRequestException('Invalid Link');
      // await this.userRepository.update({ id: userId }, { confirmed: true });
    }
    await this.userRepository.update({ id: userId }, { confirmed: true });
    res.send(
      `<h1 style="text-align: center; margin-top: 100px;">Email Verified</h1>
      <p style="text-align: center; margin-top: 100px;">You can close this window now</p>
`,
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

  async updatePassword(id: number, data: any) {
    return this.userRepository.save({ id, ...data });
  }
}
