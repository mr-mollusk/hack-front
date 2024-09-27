import { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { projectsActionCreators } from '../../store/project/project.actions';
import { Loader } from '../../components';
import { ProjectCard } from './projectCard';

const ProjectsPage = () => {
  const dispatch = useAppDispatch();
  const { loading, projects } = useAppSelector(state => state.projects);

  useEffect(() => {
    dispatch(projectsActionCreators.fetchProject());
  }, [dispatch]);

  if (loading) return <Loader />;

  return (
    <Box p='1rem' w='100%'>
      {projects.map(({ id, ...projectCardProps }) => (
        <ProjectCard key={id} id={id} {...projectCardProps} />
      ))}
    </Box>
  );
};

export default ProjectsPage;
