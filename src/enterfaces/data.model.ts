import { User } from './user.class';

export interface UserData {
  id?: number;
  title?: string;
  description?: string;
  createdAt?: Date;
  author?: User;
  tasks?: string[];
}
