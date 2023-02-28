import { Moment } from "moment";

export interface Booking {
  start: Date;
  end: Date;
  customer_breed: string;
  customer_email: string;
  customer_id: string;
  customer_phone: string;
  id: string;
  user_id: string;
}

export interface Hours {
  open: string;
  close: string;
  day: number;
  user_id: string;
  id: string;
}
export interface Shift {
  created_at: string;
  end: string;
  id: string;
  isoWeekday: number;
  repeat: boolean;
  start: string;
  user_id: string;
}

export interface ShiftSingle {
  created_at: string;
  end: string;
  id: string;
  isoWeekday: number;
  repeat: boolean;
  start: string;
  user_id: string;
  date: string;
}

export interface AddShift {
  end: string;
  isoWeekday: number;
  start: string;
  user_id: string;
  date?: Moment;
}

export interface EditShift {
  slot: Slot;
  shifts: Shift[];
  day: Moment;
  shiftId: string;
  close: boolean;
}

export interface Slot {
  value: string;
  label: string;
  hour: number;
  minute: number;
}

export interface AddBlockedTime {
  start: Moment;
  end: Moment;
  user_id: string;
}
export interface BlockedTime {
  start: string;
  end: string;
  user_id: string;
  created_at: string;
  id: string;
}

export interface DayTimeBlock {
  id: string;
  start: string;
  end: string;
  type: string;
  customer_breed?: string;
  customer_email?: string;
  customer_id?: string;
  customer_phone?: string;
  user_id?: string;
}
