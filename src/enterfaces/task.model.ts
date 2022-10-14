import { Card } from './card.model';
import { User } from './user.class';

export interface Task {
  id: number;
  completed: string;
  text: string;
  keyid: string;
  taskdata: Card;
}
