import { User } from './user.class';

export interface Board {
  id: number;
  // key: number;
  title: string;
  description: string;
  author: User;
}

export enum Type {
  private = 'private',
  public = 'public',
}
