import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BoardsEntity } from './board.entity';
import { MemberEntity } from './members.entity';

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

  @OneToMany(() => BoardsEntity, (BoardsEntity) => BoardsEntity.author, {
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
    nullable: true,
  })
  userdata: BoardsEntity[];

  @OneToMany(() => MemberEntity, (memberEntity) => memberEntity.author, {
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
    nullable: true,
  })
  membersuser: MemberEntity[];
}
