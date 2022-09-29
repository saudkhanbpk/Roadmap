import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
// import { PositionEntity } from './position.entity';
import { UserEntity } from './user.entity';

@Entity('data')
export class DataEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  title: string;

  @Column({ default: '' })
  dbname: string;

  @Column({ default: '' })
  dataType: string;

  @Column('text', { array: true, nullable: true })
  tasks: [];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ManyToOne(() => UserEntity, (UserEntity) => UserEntity.userdata, {
    eager: true,
    nullable: true,
  })
  user: UserEntity;
}
