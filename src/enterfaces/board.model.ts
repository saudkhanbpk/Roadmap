import { User } from './user.class';

export interface Board {
  id: number;
  // key: number;
  title: string;
  description: string;
  author: User;
  userId?: number;
}

export enum Type {
  private = 'private',
  public = 'public',
}
