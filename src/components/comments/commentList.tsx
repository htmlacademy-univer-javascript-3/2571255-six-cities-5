import {Comment} from '../../models/comment.ts';
import {CommentItem} from './commentItem.tsx';

type CommentListProps = {
  comments: Comment[];
}

export function CommentList({comments}: CommentListProps) {
  return (
    <>
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{comments.length}</span>
      </h2>
      <ul className="reviews__list">
        {comments.toSorted((f, s) =>
          new Date(f.date).getTime() - new Date(s.date).getTime())
          .map((c) => (
            <CommentItem {...c} key={c.id}/>
          ))}
      </ul>
    </>
  );
}
