import { Board } from './board.model';
export interface Columns {
  key: number;
  title: string;
  id: string;
  boardsdata: Board;
}

export interface Attachment {
  id: number;
  userdata: Columns;
  key: string;
  url: string;
}
