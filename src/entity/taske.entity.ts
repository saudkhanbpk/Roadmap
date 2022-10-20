import { Task } from 'src/enterfaces/task.model';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { CardsEntity } from './cards.entity';
@Entity('task')
export class TaskEntity implements Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  completed: string;

  @Column({ default: '' })
  ik: string;

  @Column({ default: '' })
  text: string;

  @ManyToOne(() => CardsEntity, (CardsEntity) => CardsEntity.task)
  @JoinColumn({ name: 'cardId' })
  taskdata: CardsEntity;
}
