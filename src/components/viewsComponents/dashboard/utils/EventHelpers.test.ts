import { IEvent } from 'components/viewsComponents/events/constants/EventsData';
import { addDays, subDays } from 'date-fns';
import { getClosestEvents } from './EventsHelpers';

describe('getClosestEvents function', () => {
  const now = new Date();

  test('returns an empty array when the events list is empty', () => {
    expect(getClosestEvents([])).toEqual([]);
  });

  test('returns an empty array when all events are in the past', () => {
    const pastEvents: IEvent[] = [
      { id: '1', title: 'Past Event 1', start: subDays(now, 5), end: subDays(now, 4), description: '', allDay: true },
      { id: '2', title: 'Past Event 2', start: subDays(now, 10), end: subDays(now, 8), description: '', allDay: true },
    ];

    expect(getClosestEvents(pastEvents)).toEqual([]);
  });

  test('returns ongoing events', () => {
    const ongoingEvent: IEvent = {
      id: '1',
      title: 'Current Event',
      start: subDays(now, 1),
      end: addDays(now, 1),
      description: '',
      allDay: true,
    };

    expect(getClosestEvents([ongoingEvent])).toEqual([ongoingEvent]);
  });

  test('returns upcoming events sorted by start time', () => {
    const futureEvents: IEvent[] = [
      {
        id: '1',
        title: 'Event in 3 days',
        start: addDays(now, 3),
        end: addDays(now, 4),
        description: '',
        allDay: false,
      },
      {
        id: '2',
        title: 'Event in 1 day',
        start: addDays(now, 1),
        end: addDays(now, 2),
        description: '',
        allDay: false,
      },
      {
        id: '3',
        title: 'Event in 2 days',
        start: addDays(now, 2),
        end: addDays(now, 3),
        description: '',
        allDay: false,
      },
    ];
    const result = getClosestEvents(futureEvents);

    expect(result).toHaveLength(3);
    expect(result.map(e => e.title)).toEqual(['Event in 1 day', 'Event in 2 days', 'Event in 3 days']);
  });

  test('limits the result to 3 closest events', () => {
    const manyEvents: IEvent[] = Array.from({ length: 5 }, (_, i) => ({
      id: `${i + 1}`,
      title: `Event ${i + 1}`,
      start: addDays(now, i + 1),
      end: addDays(now, i + 2),
      description: '',
      allDay: false,
    }));
    const result = getClosestEvents(manyEvents);

    expect(result).toHaveLength(3);
    expect(result.map(e => e.title)).toEqual(['Event 1', 'Event 2', 'Event 3']);
  });

  test('handles mixed past, ongoing, and future events', () => {
    const mixedEvents: IEvent[] = [
      { id: '1', title: 'Past Event', start: subDays(now, 10), end: subDays(now, 8), description: '', allDay: true },
      { id: '2', title: 'Ongoing Event', start: subDays(now, 1), end: addDays(now, 1), description: '', allDay: true },
      {
        id: '3',
        title: 'Future Event 1',
        start: addDays(now, 1),
        end: addDays(now, 2),
        description: '',
        allDay: false,
      },
      {
        id: '4',
        title: 'Future Event 2',
        start: addDays(now, 2),
        end: addDays(now, 3),
        description: '',
        allDay: false,
      },
    ];
    const result = getClosestEvents(mixedEvents);

    expect(result).toHaveLength(3);
    expect(result.map(e => e.title)).toEqual(['Ongoing Event', 'Future Event 1', 'Future Event 2']);
  });
});
