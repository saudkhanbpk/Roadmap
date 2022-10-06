import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { CardsEntity } from './cards.entity';
import { UserEntity } from './user.entity';

@Entity('data')
export class DataEntity {
  @PrimaryGeneratedColumn()
  // @Column({ default: '' })
  id: number;

  @Column({ default: '' })
  title: string;

  @Column({ default: '' })
  ik: string;
  // @OneToMany(() => CardsEntity, (newTaskEntity) => newTaskEntity.taskdata, {
  //   cascade: true,
  //   onDelete: 'CASCADE',
  //   eager: true,
  //   nullable: true,
  // })
  @Column( 'text' , { array: true, nullable: true})
  cards: string[];

  @ManyToOne(() => UserEntity, (UserEntity) => UserEntity.userdata, {
    eager: true,
    nullable: true,
  })
  author: UserEntity;
}
