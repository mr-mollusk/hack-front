import { useDispatch } from 'react-redux';
import { AppDispatch } from '../@types/store.types';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
