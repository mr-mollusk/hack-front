import { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Loader } from '../../components';
import { tasksActionCreators } from '../../store/tasks/tasks.actions';
import { useParams } from 'react-router-dom';
import { Column } from './column';
import s from './project.module.scss';

const ProjectPage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { loading, tasks } = useAppSelector(state => state.tasks);

  useEffect(() => {
    dispatch(tasksActionCreators.fetchTasksByProjectId(Number(id)));
  }, [dispatch, id]);

  console.log(tasks);

  if (loading) return <Loader />;

  return (
    <Box p='1rem' w='100%' className={s.project__wrapper}>
      <Column title='to do' />

      <Column title='to do' />

      <Column title='to do' />
    </Box>
  );
};

export default ProjectPage;
