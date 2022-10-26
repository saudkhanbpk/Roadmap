import { Card } from './card.model';
export interface Task {
  id: number;
  completed: string;
  text: string;
  ik: string;
  deadline: string;
  created_by: string;
  comments: string[];
  taskdata: Card;
}
