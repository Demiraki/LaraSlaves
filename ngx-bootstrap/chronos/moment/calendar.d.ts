import { Locale } from 'ngx-bootstrap/chronos/locale/locale.class';
import { DateInput } from 'ngx-bootstrap/chronos/test/chain';
import { DateParsingConfig } from 'ngx-bootstrap/chronos/create/parsing.types';
export declare type CalendarSpecVal = string | ((m?: DateInput, now?: Date) => string);
export interface CalendarSpec {
    sameDay?: CalendarSpecVal;
    nextDay?: CalendarSpecVal;
    lastDay?: CalendarSpecVal;
    nextWeek?: CalendarSpecVal;
    lastWeek?: CalendarSpecVal;
    sameElse?: CalendarSpecVal;
    [x: string]: CalendarSpecVal | void;
}
export declare function getCalendarFormat(date: Date, now: Date, config: DateParsingConfig): "sameElse" | "lastWeek" | "lastDay" | "sameDay" | "nextDay" | "nextWeek";
export declare function calendar(date: Date, time: Date, formats: CalendarSpec, locale?: Locale, config?: DateParsingConfig): string;
