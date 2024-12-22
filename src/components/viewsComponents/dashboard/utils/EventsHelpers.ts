import { IEvent } from 'components/viewsComponents/events/constants/EventsData';
import { isAfter, isBefore } from 'date-fns';
import _ from 'lodash';

export const getClosestEvents = (events: IEvent[]): IEvent[] => {
  const now = new Date();

  return _(events)
    .filter(event => {
      return isAfter(event.start, now) || (isBefore(event.start, now) && isAfter(event.end, now));
    })
    .orderBy(event => event.start.getTime())
    .take(3)
    .value();
};
