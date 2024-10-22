import {Comment} from '../../models/comment.ts';
import {ConvertDate} from '../../common/dateTimeConverter.ts';
import {RatingClasses} from '../../constants/ratingClasses.ts';
import {RatingStars} from '../ratingStars/ratingStars.tsx';

type CommentItemProps = Comment;

export function CommentItem({user, rating, comment, date}:CommentItemProps){
  return(
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarUrl}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <RatingStars rating={rating} ratingClass={RatingClasses.Comment} isValueHidden/>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={date}>{ConvertDate(date)}</time>
      </div>
    </li>
  );
}
