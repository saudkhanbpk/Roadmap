import { IsString, IsOptional, IsArray } from 'class-validator';
import { Lables } from 'src/enterfaces/lable.model';
import { Task } from 'src/enterfaces/task.model';
import { UserData } from 'src/enterfaces/userdata.model';

export class cardDto {
  @IsOptional()
  id: number;

  @IsOptional()
  project: UserData;

  @IsString()
  @IsOptional()
  desc: string;

  @IsString()
  @IsOptional()
  ik: string;

  @IsString()
  @IsOptional()
  title: string;

  @IsOptional()
  @IsArray()
  lable: Lables[];

  @IsOptional()
  @IsArray()
  task: Task[];

  /*   @IsOptional()
  name: string; */
}
