import {RatingClasses} from '../../constants/ratingClasses.ts';

type RatingStarsProps = {
  rating: number;
  ratingClass: RatingClasses;
  isValueHidden: boolean;
};

export function RatingStars({rating, ratingClass, isValueHidden}: RatingStarsProps) {
  const page = ratingClass === RatingClasses.Comment ? 'reviews'
    : 'offer';

  return (
    <div className={`${page}__rating rating`}>
      <div className={`${page}__stars rating__stars`}>
        <span style={{width: `${(rating * 100) / 5}%`}}/>
        <span className="visually-hidden">Rating</span>
      </div>
      {!isValueHidden && <span className={`${page}__rating-value rating__value`}>{rating}</span>}
    </div>
  );
}
