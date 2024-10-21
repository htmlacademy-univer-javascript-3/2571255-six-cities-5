import {Offer} from '../../models/offer.ts';
import { Link } from 'react-router-dom';
import {CardTypes} from '../../constants/cardTypes.ts';
import cn from 'classnames';

type PlaceCardProps = Offer & {
  cardType: CardTypes;
  onMouseOver?: () => void;
  onMouseLeave?: () => void;
}

export function PlaceCard({
  id,
  isPremium,
  images,
  price,
  rating,
  title,
  type,
  isFavorite,
  cardType,
  onMouseLeave,
  onMouseOver
}: PlaceCardProps) {

  return (
    <article className={cn('place-card', {
      'cities__card': cardType === CardTypes.Cities,
      'favorites__card': cardType === CardTypes.Favorites,
    })}
    onMouseLeave={onMouseLeave}
    onMouseOver={onMouseOver}
    >
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className={cn('place-place-card__image-wrapper', {
        'cities__image-wrapper': cardType === CardTypes.Cities,
        'favorites__image-wrapper': cardType === CardTypes.Favorites,
      })}
      >
        <Link to={`/offer/${id}`}>
          <img
            className="place-card__image"
            src={images[0]}
            width={cardType === CardTypes.Cities ? 260 : 150}
            height={cardType === CardTypes.Cities ? 200 : 110}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={cn('place-card__info', {'favorites__card-info': cardType === CardTypes.Cities})}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`}
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * 20}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
