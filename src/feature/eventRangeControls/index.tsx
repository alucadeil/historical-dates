import ArrowButton from 'entity/arrowButton';
import { Container } from './ui';
import { useContext } from 'react';
import { EventsContext } from 'shared/context';

const EventRangeControls = () => {
  const { data, eventIndex } = useContext(EventsContext);
  return (
    <Container>
      <span>{`${String(eventIndex).padStart(2, "0")}/${String(data!.length).padStart(2, "0")}`}</span>
      <div>
        <ArrowButton className="pagination-prev" isLeft />
        <ArrowButton className="pagination-next" />
      </div>
    </Container>
  );
};

export default EventRangeControls;

