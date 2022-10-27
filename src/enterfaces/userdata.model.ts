import { Board } from './board.model';
export interface UserData {
  id: number;
  title: string;
  // ik: string;
  boardsdata: Board;
}

export interface Attachment {
  id: number;
  userdata: UserData;
  key: string;
  url: string;
}
