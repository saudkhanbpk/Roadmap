import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';
import { CardsEntity } from './cards.entity';
@Entity('task')
export class TaskEntity {
  @PrimaryGeneratedColumn()
  // @Column({ default: '' })
  id: number;

  @Column({ default: '' })
  completed: string;

  @Column({ default: '' })
  keyid: string;

  @Column({ default: '' })
  text: string;

  // @ManyToOne(() => CardsEntity, (dataEntity) => dataEntity.tasks)
  // @JoinColumn({ name: 'dataId' })
  // taskdata: CardsEntity;
}
