import {User} from './user.ts';

export type Comment = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
}
