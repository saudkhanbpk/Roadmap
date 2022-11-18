import { Board } from './board.model';
export interface UserData {
  key: number;
  title: string;
  id: string;
  boardsdata: Board;
}

export interface Attachment {
  id: number;
  userdata: UserData;
  key: string;
  url: string;
}
