import { useDispatch, useSelector } from 'react-redux';
import {State} from '../models/state.ts';
import { store } from './index';

export const useAppSelector = <T>(callback: (state: State) => T) => useSelector<State, T>(callback);
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
