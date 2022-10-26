import { Member } from 'src/enterfaces/member.model';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { TaskEntity } from './taske.entity';
@Entity('members')
export class MemberEntity implements Member {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  name: string;

  @ManyToOne(() => TaskEntity, (taskEntity) => taskEntity.members)
  @JoinColumn({ name: 'TaskId' })
  memberdata: TaskEntity;
}
