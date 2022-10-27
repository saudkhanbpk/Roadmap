import { Lables } from 'src/enterfaces/lable.model';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { CardsEntity } from './cards.entity';

@Entity('lable')
export class LableEntity implements Lables {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  color: string;

  @Column({ default: '' })
  text: string;

  @ManyToOne(() => CardsEntity, (CardsEntity) => CardsEntity.labels)
  @JoinColumn({ name: 'cardId' })
  labledata: CardsEntity;
}
