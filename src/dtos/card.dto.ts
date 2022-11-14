import { IsString, IsOptional, IsArray } from 'class-validator';
import { Lables } from 'src/enterfaces/lable.model';
import { Task } from 'src/enterfaces/task.model';
import { Columns } from 'src/enterfaces/userdata.model';

export class cardDto {
  @IsOptional()
  key: number;

  @IsOptional()
  project: Columns;

  @IsString()
  @IsOptional()
  desc: string;

  @IsString()
  @IsOptional()
  id: string;

  @IsString()
  @IsOptional()
  title: string;

  @IsOptional()
  @IsArray()
  labels: Lables[];

  @IsOptional()
  @IsArray()
  tasks: Task[];

  /*   @IsOptional()
  name: string; */
}
