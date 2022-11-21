import { Board } from './board.model';
import { Task } from './task.model';
import { User } from './user.class';
export interface Member {
  id: number;
  name: string;
  email: string;
  memberdatas: Board;
  memberdata: Task;
  author: User;
}
