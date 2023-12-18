import EventList from 'feature/eventList';
import EventRange from 'feature/eventRange';
import { MainContainer, RangesContainer } from './ui';
import Title from 'entity/title';
import { useCallback, useMemo, useState } from 'react';
import { IEventsRange, mockData } from 'shared/data';
import { EventsContext } from 'shared/context';
import EventRangeControls from 'feature/eventRangeControls';
import PaginationControl from 'feature/pagination';

const EventView = () => {
  const [activeEventsRange, setActiveEventsRange] = useState<IEventsRange>(mockData[0]);
  const [eventIndex, setEventIndex] = useState(mockData.length ? 1 : 0);

  const handleSetActiveEventsRange = useCallback((index: number) => {
    if (typeof index !== 'number') return;
    setActiveEventsRange(mockData[index])
    setEventIndex(index + 1);
  }, []);

  const contextValue = useMemo(() => ({ data: mockData, activeEventsRange, eventIndex, handleSetActiveEventsRange }), [activeEventsRange]);

  return (
    <MainContainer>
      <EventsContext.Provider value={contextValue}>
        <Title />
        <EventRange />
        <EventList />
        <EventRangeControls />
        <PaginationControl />
      </EventsContext.Provider>
    </MainContainer>
  )
};

export default EventView;
