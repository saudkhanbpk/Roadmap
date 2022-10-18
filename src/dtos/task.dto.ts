import { IsString, IsOptional } from 'class-validator';
import { Card } from 'src/enterfaces/card.model';

export class taskDto {
  @IsOptional()
  id: number;

  @IsOptional()
  project: Card;

  @IsString()
  @IsOptional()
  completed: string;

  @IsString()
  @IsOptional()
  ik: string;

  @IsString()
  @IsOptional()
  text: string;

  @IsString()
  @IsOptional()
  title: string;

  /*   @IsOptional()
    name: string; */
}
