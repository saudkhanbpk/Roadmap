import { UserData } from './userdata.model';

export interface Card {
  id: number;
  desc: string;
  ik: string;
  date: Date;
  userdata: UserData;
  title: string;
}
