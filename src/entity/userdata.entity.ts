// import { UserData } from 'src/enterfaces/data.model';
// import { UserData } from 'src/enterfaces/task.model';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { CardsEntity } from './cards.entity';
import { UserEntity } from './user.entity';

@Entity('data')
export class DataEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  title: string;

  // @Column({ default: '' })
  // ik: string;

  // @Column('array', { array: true, nullable: true })
  // @Column()
  // cards: UserData[];

  @OneToMany(() => CardsEntity, (CardsEntity) => CardsEntity.carddata, {
    cascade: true,
    onDelete: 'CASCADE',
    nullable: true,
  })
  @JoinColumn({ name: 'labledId' })
  cards: CardsEntity[];

  @ManyToOne(() => UserEntity, (UserEntity) => UserEntity.userdata, {
    eager: true,
    nullable: true,
  })
  author: UserEntity;
}
