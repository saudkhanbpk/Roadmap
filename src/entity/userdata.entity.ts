import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('data')
export class DataEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  title: string;

  @Column({ default: '' })
  ik: string;

  @Column('text', { array: true, nullable: true })
  cards: string[];

  @ManyToOne(() => UserEntity, (UserEntity) => UserEntity.userdata, {
    eager: true,
    nullable: true,
  })
  author: UserEntity;
}
