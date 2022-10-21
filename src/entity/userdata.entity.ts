import { UserData } from 'src/enterfaces/userdata.model';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { CardsEntity } from './cards.entity';
import { UserEntity } from './user.entity';

@Entity({ name: 'data' })
export class DataEntity implements UserData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  title: string;

  @Column({ default: '' })
  ik: string;

  @OneToMany(() => CardsEntity, (CardsEntity) => CardsEntity.userdata, {
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
    nullable: true,
  })
  cards: CardsEntity[];

  @ManyToOne(() => UserEntity, (UserEntity) => UserEntity.userdata, {
    // eager: true,
    nullable: true,
  })
  @JoinColumn({ name: 'userId' })
  author: UserEntity;
}
