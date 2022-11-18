import { IsString, IsOptional, IsArray } from 'class-validator';
import { Task } from 'src/enterfaces/task.model';

export class MemberDto {
  @IsOptional()
  key: number;

  @IsOptional()
  id: string;

  @IsOptional()
  project: Task;

  @IsString()
  @IsOptional()
  name: string;

  /*   @IsOptional()
    name: string; */
}
