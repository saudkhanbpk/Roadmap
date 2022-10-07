import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('lable')
export class LableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  color: string;

  @Column({ default: '' })
  text: string;
}
