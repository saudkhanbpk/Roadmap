import { User } from './user.class';
export interface UserData {
  id: number;
  title: string;
  ik: string;
  author: User;
}

export interface Attachment {
  id: number;
  userdata: UserData;
  key: string;
  url: string;
}
