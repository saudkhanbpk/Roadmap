import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { CardsEntity } from './cards.entity';

@Entity('lable')
export class LableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  color: string;

  @Column({ default: '' })
  text: string;

  @ManyToOne(() => CardsEntity, (CardsEntity) => CardsEntity.lable, {
    eager: true,
    nullable: true,
  })
  labledata: CardsEntity;
}
