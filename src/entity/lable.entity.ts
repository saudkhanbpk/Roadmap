import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';
import { CardsEntity } from './cards.entity';

@Entity('lable')
export class LableEntity {
  @PrimaryGeneratedColumn()
  // @Column({ default: '' })
  id: number;

  @Column({ default: '' })
  color: string;

  @Column({ default: '' })
  text: string;

  @ManyToOne(() => CardsEntity, (userEntity) => userEntity.labels)
  @JoinColumn({ name: 'lableId' })
  labledata: CardsEntity;
}
