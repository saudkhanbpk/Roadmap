// import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

// export class BaseEntity {
//   @Column()
//   @CreateDateColumn()
//   createdAt: Date;

//   @Column()
//   @UpdateDateColumn()
//   updatedAt: Date;
// }
import { Board } from 'src/enterfaces/board.model';
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { DataEntity } from './userdata.entity';

@Entity('Boards')
export class BoardsEntity implements Board {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => DataEntity, (dataEntity) => dataEntity.boardsdata, {
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
    nullable: true,
  })
  boards: DataEntity[];

  @ManyToOne(() => UserEntity, (UserEntity) => UserEntity.userdata, {
    // eager: true,
    nullable: true,
  })
  @JoinColumn({ name: 'userId' })
  author: UserEntity;
}
