import { IsString, IsOptional } from 'class-validator';
import { Task } from 'src/enterfaces/task.model';

export class MemberDto {
  @IsOptional()
  id: number;

  @IsOptional()
  project: Task;

  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  email: string;

  /*   @IsOptional()
    name: string; */
}
