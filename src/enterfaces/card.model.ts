import { Columns } from './userdata.model';

export interface Card {
  key: number;
  desc: string;
  id: string;
  date: string;
  userdata: Columns;
  title: string;
}
