import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
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
}
