// import { UserData } from 'src/enterfaces/data.model';
// import { UserData } from 'src/enterfaces/task.model';
import { UserData } from 'src/enterfaces/userdata.model';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { BaseEntity } from './base.entity';
import { CardsEntity } from './cards.entity';
import { UserEntity } from './user.entity';

@Entity({ name: 'data' })
export class DataEntity extends BaseEntity implements UserData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  title: string;

  @Column({ default: '' })
  author: string;

  @OneToMany(() => CardsEntity, (CardsEntity) => CardsEntity.userdata, {
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
    nullable: true,
  })
  cards: CardsEntity[];

  // @ManyToOne(() => UserEntity, (UserEntity) => UserEntity.userdata, {
  //   // eager: true,
  //   nullable: true,
  // })
  // @JoinColumn({ name: 'userId' })
  // author: UserEntity;
}
