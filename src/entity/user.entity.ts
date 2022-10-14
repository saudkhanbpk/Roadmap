import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DataEntity } from './userdata.entity';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phoneNumber: string;

  @Index('UQ_user_email', { unique: true })
  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  confirmPassword: string;

  @Column({ nullable: true })
  imagePath: string;

  @OneToMany(() => DataEntity, (DataEntity) => DataEntity.author, {
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
    nullable: true,
  })
  userdata: DataEntity[];
}
