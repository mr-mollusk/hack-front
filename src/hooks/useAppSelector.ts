import { useSelector } from 'react-redux';
import { RootState } from '../@types/store.types';

export const useAppSelector = useSelector.withTypes<RootState>();
