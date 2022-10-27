import { IsString, IsOptional, IsNotEmpty, IsArray } from 'class-validator';
import { Board } from 'src/enterfaces/board.model';
import { User } from 'src/enterfaces/user.class';
import { Attachment, UserData } from 'src/enterfaces/userdata.model';

export class userdataDto implements UserData {
  @IsOptional()
  id: number;

  @IsOptional()
  userId: number;

  @IsString()
  @IsNotEmpty()
  public title: string;

  // @IsString()
  // @IsNotEmpty()
  // public ik: string;

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
