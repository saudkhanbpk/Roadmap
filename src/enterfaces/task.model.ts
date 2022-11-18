import { Card } from './card.model';
export interface Task {
  key: number;
  completed: string;
  text: string;
  id: string;
  deadline: string;
  created_by: string;
  comments: string[];
  taskdata: Card;
}
