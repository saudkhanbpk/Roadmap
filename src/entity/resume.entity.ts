import { Resume } from 'src/enterfaces/resume.model';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('rsesume')
export class ResumeEntity implements Resume {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  edu1_desc: string;

  @Column({ default: '' })
  edu1_qualifiction: string;

  @Column({ default: '' })
  edu1_school: string;

  @Column({ default: '' })
  edu1_year: string;

  @Column({ default: '' })
  edu2_desc: string;

  @Column({ default: '' })
  edu2_qualifiction: string;

  @Column({ default: '' })
  edu2_school: string;

  @Column({ default: '' })
  edu2_year: string;

  @Column({ default: '' })
  email: string;

  @Column({ default: '' })
  exp1_desc: string;

  @Column({ default: '' })
  exp1_dur: string;

  @Column({ default: '' })
  exp1_org: string;

  @Column({ default: '' })
  exp1_pos: string;

  @Column({ default: '' })
  exp2_desc: string;

  @Column({ default: '' })
  exp2_dur: string;

  @Column({ default: '' })
  exp2_org: string;

  @Column({ default: '' })
  exp2_pos: string;

  @Column({ default: '' })
  extra_1: string;

  @Column({ default: '' })
  extra_2: string;

  @Column({ default: '' })
  extra_3: string;

  @Column({ default: '' })
  extra_4: string;

  @Column({ default: '' })
  extra_5: string;

  @Column({ default: '' })
  github: string;

  @Column({ default: '' })
  linkedin: string;

  @Column({ default: '' })
  name: string;

  @Column({ default: '' })
  phone: string;

  @Column({ default: '' })
  proj1_desc: string;

  @Column({ default: '' })
  proj1_link: string;

  @Column({ default: '' })
  proj1_title: string;

  @Column({ default: '' })
  proj2_desc: string;

  @Column({ default: '' })
  proj2_link: string;

  @Column({ default: '' })
  proj2_title: string;

  @Column({ default: '' })
  skills: string;

  @Column({ default: '' })
  status: string;

  @Column({ default: '' })
  step: string;

  //   @ManyToOne(() => UserEntity, (UserEntity) => UserEntity.userdata, {
  //     // eager: true,
  //     nullable: true,
  //   })
  //   @JoinColumn({ name: 'userId' })
  //   author: UserEntity;
}
