import { User } from './user.class';

export interface UserNewTask {
  id?: number;
  author?: User;
  members?: string;
  deadline?: string;
  created?: string;
  updateBy?: string;
  comments?: string[];
}
