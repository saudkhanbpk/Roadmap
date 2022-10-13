import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { CardsEntity } from './cards.entity';
@Entity('task')
export class TaskEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  completed: string;

  @Column({ default: '' })
  keyid: string;

  @Column({ default: '' })
  text: string;

  @ManyToOne(() => CardsEntity, (CardsEntity) => CardsEntity.task, {
    eager: true,
    nullable: true,
  })
  taskdata: CardsEntity;
}
