import { Task } from 'src/enterfaces/task.model';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { BaseEntity } from './base.entity';
import { CardsEntity } from './cards.entity';
@Entity('task')
export class TaskEntity extends BaseEntity implements Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  completed: string;

  @Column({ default: '' })
  keyid: string;

  @Column({ default: '' })
  text: string;

  @ManyToOne(() => CardsEntity, (CardsEntity) => CardsEntity.task)
  @JoinColumn({ name: 'cardId' })
  taskdata: CardsEntity;
}
