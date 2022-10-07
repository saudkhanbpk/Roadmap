import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cards')
export class CardsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  desc: string;

  @Column({ default: '' })
  keyid: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: Date;

  @Column({ default: '' })
  title: string;
}
