import { User } from './user.class';

export interface Task {
  id?: number;
  author?: User;
  completed?: string;
  text?: string;
}
