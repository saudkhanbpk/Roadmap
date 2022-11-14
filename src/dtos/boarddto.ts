import {
  IsString,
  IsOptional,
  IsNotEmpty,
  IsArray,
  IsNumber,
} from 'class-validator';
import { Board } from 'src/enterfaces/board.model';
import { User } from 'src/enterfaces/user.class';
import { UserData } from 'src/enterfaces/userdata.model';

export class BoardsDto implements Board {
  @IsOptional()
  id: number;

  // @IsOptional()
  // id: string;

  @IsOptional()
  title: string;

  @IsOptional()
  description: string;

  @IsString()
  @IsNotEmpty()
  public author: User;

  @IsNumber()
  userId: number;

  @IsOptional()
  @IsArray()
  boards: UserData[];
}
