import { IsString, IsOptional, IsArray } from 'class-validator';
import { Task } from 'src/enterfaces/task.model';

export class MemberDto {
  @IsOptional()
  id: number;

  @IsOptional()
  project: Task;

  @IsString()
  @IsOptional()
  name: string;

  /*   @IsOptional()
    name: string; */
}
