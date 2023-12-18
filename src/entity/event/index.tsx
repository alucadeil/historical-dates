import { FC } from 'react';
import { Container, Description, Header } from './ui';
import { IEvent } from 'shared/data';

interface IEventProps {
  event: IEvent;
}

const Event: FC<IEventProps> = ({ event }) => {
  const { date, description } = event;
  return (
    <Container>
      <Header>{date}</Header>
      <Description>{description}</Description>
    </Container>
  )
};

export default Event;
