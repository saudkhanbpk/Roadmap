import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { LableEntity } from './lable.entity';
import { TaskEntity } from './taske.entity';
// import { PositionEntity } from './position.entity';
import { UserEntity } from './user.entity';

@Entity('data')
export class DataEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  title: string;

  // @Column({ default: '' })
  // cards: string[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: Date;

  // @ManyToOne(() => TaskEntity, (dataEntity) => dataEntity.task)
  // taskdata: TaskEntity;

  // @OneToMany(() => TaskEntity, (newTaskEntity) => newTaskEntity.taskdata)
  @Column('text', { array: true, nullable: true })
  cards: string[];

  // @OneToMany(() => LableEntity, (lableEntity) => lableEntity.labledata)
  // @Column('text', { array: true, nullable: true })
  // lable: string[];

  // @ManyToOne(() => LableEntity, (userEntity) => userEntity.lable)
  // labledata: LableEntity;

  @ManyToOne(() => UserEntity, (UserEntity) => UserEntity.userdata, {
    eager: true,
    nullable: true,
  })
  author: UserEntity;
}
