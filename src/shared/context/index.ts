import { createContext } from 'react';
import { IDataDTO, IEventsRange } from '../data';

export interface ContextState {
  data: IDataDTO;
  activeEventsRange: Partial<IEventsRange>;
  eventIndex: number;
  handleSetActiveEventsRange: (index: number) => void;
}

export const EventsContext = createContext<Partial<ContextState>>({});