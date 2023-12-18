import { createContext } from 'react';
import { IDataDTO, IEventsRange } from '../data';

export interface ContextState {
  data: IDataDTO;
}

export const EventsContext = createContext<Partial<ContextState>>({});