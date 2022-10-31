import { IsString, IsOptional } from 'class-validator';
import { Card } from 'src/enterfaces/card.model';

export class lableDto {
  @IsOptional()
  key: number;

  @IsOptional()
  id: string;

  @IsOptional()
  project: Card;

  @IsString()
  @IsOptional()
  color: string;

  @IsString()
  @IsOptional()
  text: string;

  /*   @IsOptional()
    name: string; */
}
