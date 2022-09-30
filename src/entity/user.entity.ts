import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { NewTaskEntity } from './taske.entity';
import { DataEntity } from './userdata.entity';
// import { DataEntity } from './data.entity';
// import { NewTaskEntity } from './newData.entity';

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

  @OneToMany(() => NewTaskEntity, (newTaskEntity) => newTaskEntity.author)
  newtask: NewTaskEntity[];

  @OneToMany(() => DataEntity, (DataEntity) => DataEntity.user, {
    cascade: true,
    onDelete: 'CASCADE',
    nullable: true,
  })
  userdata: DataEntity[];
}
