import { UserData } from 'src/enterfaces/userdata.model';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { BoardsEntity } from './board.entity';
import { CardsEntity } from './cards.entity';

@Entity({ name: 'data' })
export class DataEntity implements UserData {
  @PrimaryGeneratedColumn()
  key: number;

  @Column({ default: '' })
  title: string;

  @Column({ default: '' })
  id: string;

  @OneToMany(() => CardsEntity, (CardsEntity) => CardsEntity.userdata, {
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
    nullable: true,
  })
  cards: CardsEntity[];

  @ManyToOne(() => BoardsEntity, (BoardsEntity) => BoardsEntity.boards)
  @JoinColumn({ name: 'boardsKey' })
  boardsdata: BoardsEntity;
}
