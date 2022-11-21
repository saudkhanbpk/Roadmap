import { Columns } from 'src/enterfaces/userdata.model';
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

@Entity({ name: 'column' })
export class DataEntity implements Columns {
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

  @ManyToOne(() => BoardsEntity, (boardsEntity) => boardsEntity.boards, {
    // onDelete: 'CASCADE',
    nullable: true,
  })
  @JoinColumn({ name: 'boardsId' })
  boardsdata: BoardsEntity;
}
