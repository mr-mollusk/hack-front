import { createBrowserRouter } from 'react-router-dom';
import { MockPage } from '../pages';
import { Loader } from '../components';

const pageLoader = () => <Loader />;

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MockPage />,
    loader: pageLoader,
  },
]);
