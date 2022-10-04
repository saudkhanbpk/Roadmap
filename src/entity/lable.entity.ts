import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { DataEntity } from './userdata.entity';
// import { DataEntity } from './data.entity';

@Entity('lable')
export class LableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  color: string;

  @Column({ default: '' })
  text: string;

  // @ManyToOne(() => DataEntity, (userEntity) => userEntity.lable)
  // labledata: DataEntity;

  // @OneToMany(() => DataEntity, (lableEntity) => lableEntity.labledata)
  // lable: DataEntity[];

  //   @ManyToOne(() => DataEntity, (DataEntity) => DataEntity.position, {
  //     eager: true,
  //     nullable: true,
  //   })
  //   positiondata: DataEntity;
}
