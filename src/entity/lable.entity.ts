import { Lables } from 'src/enterfaces/lable.model';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { BaseEntity } from './base.entity';
import { CardsEntity } from './cards.entity';

@Entity('lable')
export class LableEntity extends BaseEntity implements Lables {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  color: string;

  @Column({ default: '' })
  text: string;

  @ManyToOne(() => CardsEntity, (CardsEntity) => CardsEntity.lable)
  @JoinColumn({ name: 'cardId' })
  labledata: CardsEntity;
}
