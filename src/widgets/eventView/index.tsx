import { EventsContext } from 'shared/context';
import { MainContainer } from './ui';
import { useMemo } from 'react';
import { mockData } from 'shared/data';
import Title from 'entity/title';
import EventList from 'feature/eventList';

const EventView = () => {
  const contextValue = useMemo(() => ({ data: mockData  }), []);
  return (
    <MainContainer>
      <EventsContext.Provider value={contextValue}>
        <Title />
        <EventList />
      </EventsContext.Provider>
  </MainContainer>
  )
};

export default EventView;
