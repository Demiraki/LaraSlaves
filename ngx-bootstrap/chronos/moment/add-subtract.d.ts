import { Duration } from 'ngx-bootstrap/chronos/duration/constructor';
import { UnitOfTime } from 'ngx-bootstrap/chronos/types';
export declare function add(date: Date, val: number, period: UnitOfTime, isUTC?: boolean): Date;
export declare function subtract(date: Date, val: number, period: UnitOfTime, isUTC?: boolean): Date;
export declare function addSubtract(date: Date, duration: Duration, isAdding: number, isUTC?: boolean): Date;
