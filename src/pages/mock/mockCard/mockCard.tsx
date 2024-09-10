import { Card, CardBody, Checkbox, Heading, Text } from '@chakra-ui/react';
import { MockCardProps } from './mockCard.types';

export const MockCard = ({ title, description, done }: MockCardProps) => (
  <Card mb='1rem'>
    <CardBody>
      <Checkbox isChecked={done}></Checkbox>
      <Heading>{title}</Heading>
      <Text fontSize='2xl'>{description}</Text>
    </CardBody>
  </Card>
);
