import { Card } from 'src/enterfaces/card.model';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { LableEntity } from './lable.entity';
import { TaskEntity } from './taske.entity';
import { DataEntity } from './userdata.entity';

@Entity('cards')
export class CardsEntity implements Card {
  @PrimaryGeneratedColumn()
  key: number;

  @Column({ default: '' })
  desc: string;

  @Column({ default: '' })
  id: string;

  @Column({ default: '' })
  date: string;

  @Column({ default: '' })
  title: string;

  @OneToMany(() => LableEntity, (LableEntity) => LableEntity.labledata, {
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
    nullable: true,
  })
  labels: LableEntity[];

  @OneToMany(() => TaskEntity, (TaskEntity) => TaskEntity.taskdata, {
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
    nullable: true,
  })
  tasks: TaskEntity[];

  @ManyToOne(() => DataEntity, (DataEntity) => DataEntity.cards)
  @JoinColumn({ name: 'dataKey' })
  userdata: DataEntity;
}
