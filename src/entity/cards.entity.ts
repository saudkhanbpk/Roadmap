import { Card } from 'src/enterfaces/card.model';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { BaseEntity } from './base.entity';
import { LableEntity } from './lable.entity';
import { TaskEntity } from './taske.entity';
import { DataEntity } from './userdata.entity';

@Entity('cards')
export class CardsEntity extends BaseEntity implements Card {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  desc: string;

  @Column({ default: '' })
  ik: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: Date;

  @Column({ default: '' })
  title: string;

  @OneToMany(() => LableEntity, (LableEntity) => LableEntity.labledata, {
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
    nullable: true,
  })
  lable: LableEntity[];

  @OneToMany(() => TaskEntity, (TaskEntity) => TaskEntity.taskdata, {
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
    nullable: true,
  })
  task: TaskEntity[];

  @ManyToOne(() => DataEntity, (DataEntity) => DataEntity.cards)
  @JoinColumn({ name: 'datadId' })
  userdata: DataEntity;
}
