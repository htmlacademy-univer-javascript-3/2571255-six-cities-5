import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Offer} from '../../models/offer.ts';
import {Comment} from '../../models/comment.ts';
import {useAppDispatch, useAppSelector} from '../../store/hooks.ts';
import {fetchOffer} from '../../store/api-actions.ts';
import {OfferListItem} from '../../models/offer-list-item.ts';

type OfferPageState = {
  offer: Offer | undefined;
  comments: Comment[];
  nearbyOffers: OfferListItem[];
  error: Error | undefined;
  isLoading: boolean;
};

export function useOfferPage(): OfferPageState {
  const { id } = useParams<{ id?: string }>();
  const dispatch = useAppDispatch();
  const currentOfferState = useAppSelector((state) => state.currentOffer);
  const [state, setState] = useState<{
    error: Error | undefined;
    isLoading: boolean;
  }>({ error: undefined, isLoading: true });
  useEffect(() => {
    if (id === undefined) {
      setState({ ...state, error: new Error('Invalid offerId') });
      return;
    }
    setState({ ...state, isLoading: true });
    dispatch(fetchOffer(id))
      .unwrap()
      .catch((e) => {
        if (e instanceof Error) {
          setState({ ...state, error: e });
        }
      })
      .finally(() => {
        setState({ ...state, isLoading: false });
      });
  }, [dispatch, id]);
  return { ...currentOfferState, ...state };
}
