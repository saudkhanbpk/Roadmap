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
export class CardsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  desc: string;

  @Column({ default: '' })
  keyid: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: Date;

  @Column({ default: '' })
  title: string;

  @OneToMany(() => LableEntity, (LableEntity) => LableEntity.labledata, {
    cascade: true,
    onDelete: 'CASCADE',
    nullable: true,
  })
  @JoinColumn({ name: 'labledId' })
  lable: LableEntity[];

  @OneToMany(() => TaskEntity, (TaskEntity) => TaskEntity.taskdata, {
    cascade: true,
    onDelete: 'CASCADE',
    nullable: true,
  })
  @JoinColumn({ name: 'taskId' })
  task: TaskEntity[];

  @ManyToOne(() => DataEntity, (DataEntity) => DataEntity.cards, {
    eager: true,
    nullable: true,
  })
  carddata: DataEntity;
}
