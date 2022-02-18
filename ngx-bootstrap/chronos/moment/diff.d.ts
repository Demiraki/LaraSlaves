import { DateParsingConfig } from 'ngx-bootstrap/chronos/create/parsing.types';
import { UnitOfTime } from 'ngx-bootstrap/chronos/types';
export declare function diff(date: Date, input: Date, units: UnitOfTime, asFloat: boolean, config?: DateParsingConfig): number;
