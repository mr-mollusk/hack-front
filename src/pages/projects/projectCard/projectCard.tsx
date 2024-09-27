import { HStack, IconButton } from '@chakra-ui/react';
import { ProjectCardProps } from './projectCard.types';
import s from './projectsCard.module.scss';
import { DeleteIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { MouseEvent } from 'react';

export const ProjectCard = ({ id, title, description }: ProjectCardProps) => {
  const navigate = useNavigate();

  const deleteProjectHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };

  const navigateHandler = () => {
    navigate(`/projects/${id}`);
  };

  return (
    <div onClick={navigateHandler} className={s.projectCard__wrapper}>
      <HStack
        alignItems='center'
        justifyContent='space-between'
        className={s.projectCard__content}>
        <div>
          <h3 className={s.projectCard__title}>{title}</h3>
          <div className={s.projectCard__description}>{description}</div>
        </div>
        <IconButton
          aria-label='Cross button'
          colorScheme='red'
          icon={<DeleteIcon />}
          onClick={e => deleteProjectHandler(e)}
        />
      </HStack>
    </div>
  );
};
