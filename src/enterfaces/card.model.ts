import { UserData } from './userdata.model';

export interface Card {
  id: number;
  desc: string;
  // ik: string;
  date: string;
  userdata: UserData;
  title: string;
}
