import { Task } from './task.model';
import { User } from './user.class';

export interface Lables {
  id?: number;
  color?: string;
  title?: string;
  author?: User;
}
