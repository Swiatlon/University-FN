import type { EventContentArg } from '@fullcalendar/core/index.js';

export interface IEventCreateDialog {
  initialStartDate: Date;
  onClose: () => void;
}

export interface IEventShowDialog {
  onClose: () => void;
  event: {
    id: string;
    title: string;
    startDate: Date | null;
    endDate: Date | null;
    description: string;
    startTime: string;
    endTime: string;
  };
}

export interface IEventUpdateDialog {
  eventID: string;
  initialTitle: string;
  initialDescription: string;
  initialStartDate: Date;
  initialEndDate: Date;
  initialStartTime: string;
  initialEndTime: string;
  onClose: () => void;
}

export interface IEventContentProps {
  eventInfo: EventContentArg;
}
