import { Task } from 'src/enterfaces/task.model';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { CardsEntity } from './cards.entity';
import { MemberEntity } from './members.entity';
@Entity('task')
export class TaskEntity implements Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  completed: string;

  // @Column({ default: '' })
  // ik: string;

  @Column({ default: '' })
  text: string;

  @Column({ default: '' })
  deadline: string;

  @Column({ default: '' })
  created_by: string;

  @Column('text', { array: true, nullable: true })
  comments: string[];

  @ManyToOne(() => CardsEntity, (CardsEntity) => CardsEntity.tasks)
  @JoinColumn({ name: 'cardId' })
  taskdata: CardsEntity;

  @OneToMany(() => MemberEntity, (memberEntity) => memberEntity.memberdata, {
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
    nullable: true,
  })
  members: MemberEntity[];
}
