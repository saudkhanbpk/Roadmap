import { Card } from './card.model';
import { User } from './user.class';

export interface UserData {
  id: number;
  title: string;
  author: string;
}

export interface Attachment {
  id: number;
  userdata: UserData;
  key: string;
  url: string;
}
