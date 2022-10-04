import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { DataEntity } from './userdata.entity';
// import { DataEntity } from './data.entity';

@Entity('task')
export class TaskEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  completed: string;

  @Column({ default: '' })
  text: string;

  // @ManyToOne(() => DataEntity, (dataEntity) => dataEntity.task)
  // taskdata: DataEntity;

  // @OneToMany(() => DataEntity, (newTaskEntity) => newTaskEntity.taskdata)
  // task: DataEntity[];

  //   @ManyToOne(() => DataEntity, (DataEntity) => DataEntity.position, {
  //     eager: true,
  //     nullable: true,
  //   })
  //   positiondata: DataEntity;
}
