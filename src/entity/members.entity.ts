import { Member } from 'src/enterfaces/member.model';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { BoardsEntity } from './board.entity';
import { TaskEntity } from './taske.entity';
import { UserEntity } from './user.entity';
@Entity('members')
export class MemberEntity implements Member {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  name: string;

  @Column({ default: '' })
  email: string;

  @Column({ default: '' })
  image: string;

  @ManyToOne(() => TaskEntity, (taskEntity) => taskEntity.members)
  @JoinColumn({ name: 'taskKey' })
  memberdata: TaskEntity;

  @ManyToOne(() => BoardsEntity, (boardsEntity) => boardsEntity.members1)
  @JoinColumn({ name: 'boardId' })
  memberdatas: BoardsEntity;

  @ManyToOne(() => UserEntity, (userEntity) => userEntity.membersuser)
  @JoinColumn({ name: 'AutherId' })
  author: UserEntity;
}
