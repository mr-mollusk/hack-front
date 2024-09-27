import { useEffect } from 'react';
import { fetchMockTodoes } from '../../store/mock/mock.actions';
import { Loader } from '../../components';
import { Box } from '@chakra-ui/react';
import { MockCard } from './mockCard';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { Layout } from '../../components/layout';

const MockPage = () => {
  const dispatch = useAppDispatch();
  const { loading, todoes } = useAppSelector(state => state.mock);

  useEffect(() => {
    dispatch(fetchMockTodoes());
  }, [dispatch]);

  if (loading) return <Loader />;

  return (
    <Layout>
      <Box p='1rem' w='100%'>
        {todoes.map(({ id, ...mockCardProps }) => (
          <MockCard key={id} {...mockCardProps} />
        ))}
      </Box>
    </Layout>

  );
};
export default MockPage;
