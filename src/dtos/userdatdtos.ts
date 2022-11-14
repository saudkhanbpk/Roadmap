import { IsString, IsOptional, IsNotEmpty, IsArray } from 'class-validator';
import { Board } from 'src/enterfaces/board.model';
import { User } from 'src/enterfaces/user.class';
import { Attachment, Columns } from 'src/enterfaces/userdata.model';

export class userdataDto implements Columns {
  @IsOptional()
  key: number;

  @IsOptional()
  userId: number;

  @IsString()
  @IsNotEmpty()
  public title: string;

  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  public author: User;

  @IsString()
  @IsNotEmpty()
  public boardsdata: Board;

  @IsOptional()
  @IsArray()
  cards: Attachment[];
}
