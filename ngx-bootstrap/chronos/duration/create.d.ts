import { Duration } from 'ngx-bootstrap/chronos/duration/constructor';
import { DateObject } from 'ngx-bootstrap/chronos/types';
import { DateParsingConfig } from 'ngx-bootstrap/chronos/create/parsing.types';
export declare type DurationInput = string | number | Duration | Partial<DateObject> | {
    from: Date;
    to: Date;
};
export declare function createDuration(input?: DurationInput, key?: string, config?: DateParsingConfig): Duration;
