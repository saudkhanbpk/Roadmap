import { ContentI } from '../enterfaces/content.model';
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
  Column,
} from 'typeorm';

@Entity('content')
export class ContentEntity implements ContentI {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column({ default: '' })
  // id: string;

  @Column({ default: '' })
  title: string;

  @Column({ default: '' })
  description: string;

  @Column({ default: '' })
  author: string;

  // @OneToMany(() => DataEntity, (dataEntity) => dataEntity.boardsdata, {
  //   cascade: true,
  //   eager: true,
  //   onDelete: 'CASCADE',
  //   nullable: true,
  // })
  // boards: DataEntity[];

  // @ManyToOne(() => UserEntity, (UserEntity) => UserEntity.userdata, {
  //   // eager: true,
  //   nullable: true,
  // })
  // @JoinColumn({ name: 'userId' })
  // author: UserEntity;
}
