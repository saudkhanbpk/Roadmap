import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './user.entity';
// import { DataEntity } from './data.entity';

@Entity('newtask')
export class NewTaskEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  deadline: string;

  @Column({ default: '' })
  members: string;

  @Column({ default: '' })
  created: string;

  @Column({ default: '' })
  updatedBy: string;

  @ManyToOne(() => UserEntity, (userEntity) => userEntity.newtask)
  author: UserEntity;

  @Column('text', { array: true, nullable: true })
  comments: string[];

  //   @ManyToOne(() => DataEntity, (DataEntity) => DataEntity.position, {
  //     eager: true,
  //     nullable: true,
  //   })
  //   positiondata: DataEntity;
}
