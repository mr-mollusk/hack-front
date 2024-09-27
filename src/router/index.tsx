import { createBrowserRouter } from 'react-router-dom';
import { MockPage } from '../pages';
import { Loader } from '../components';
import { ProjectsPage } from '../pages/projects';
import { ProjectPage } from '../pages/project';
import { Suspense } from 'react';

const pageLoader = () => <Loader />;

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MockPage />,
    loader: pageLoader,
  },
  {
    path: '/projects',
    element: (
      <Suspense fallback={<Loader />}>
        <ProjectsPage />
      </Suspense>
    ),
    loader: pageLoader,
  },
  {
    path: '/projects/:id',
    element: (
      <Suspense fallback={<Loader />}>
        <ProjectPage />
      </Suspense>
    ),
    loader: pageLoader,
  },
]);
