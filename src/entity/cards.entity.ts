import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { LableEntity } from './lable.entity';
import { TaskEntity } from './taske.entity';
import { DataEntity } from './userdata.entity';

@Entity('cards')
export class CardsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  desc: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: Date;

  @OneToMany(() => LableEntity, (newTaskEntity) => newTaskEntity.labledata, {
    cascade: true,
    onDelete: 'CASCADE',
    eager: true,
    nullable: true,
  })
  labels: LableEntity[];

  @OneToMany(() => TaskEntity, (newTaskEntity) => newTaskEntity.taskdata, {
    cascade: true,
    onDelete: 'CASCADE',
    eager: true,
    nullable: true,
  })
  tasks: TaskEntity[];

  @Column({ default: '' })
  title: string;

  @ManyToOne(() => DataEntity, (dataEntity) => dataEntity.cards)
  @JoinColumn({ name: 'dataId' })
  taskdata: DataEntity;
}
