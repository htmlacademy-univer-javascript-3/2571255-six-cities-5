import { Comment } from '../models/comment.ts';
import { MockUsers } from './users.ts';

export const MockComments: Comment[] = [
  {
    id: 'comment1',
    date: '2023-10-01',
    user: MockUsers[0],
    comment: 'Great place to stay!',
    rating: 5
  },
  {
    id: 'comment2',
    date: '2023-09-25',
    user: MockUsers[1],
    comment: 'Nice view, but the room was a bit small.',
    rating: 4
  },
  {
    id: 'comment3',
    date: '2023-09-20',
    user: MockUsers[2],
    comment: 'Excellent service and very clean.',
    rating: 5
  },
  {
    id: 'comment4',
    date: '2023-09-15',
    user: MockUsers[3],
    comment: 'The location is perfect, but the noise was a bit much.',
    rating: 3
  },
  {
    id: 'comment5',
    date: '2023-09-10',
    user: MockUsers[4],
    comment: 'Highly recommend this place!',
    rating: 5
  },
  {
    id: 'comment6',
    date: '2023-09-05',
    user: MockUsers[5],
    comment: 'Average experience, nothing special.',
    rating: 3
  }
];
