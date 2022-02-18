import { DateParsingConfig } from 'ngx-bootstrap/chronos/create/parsing.types';
import { DateParseTokenFn } from 'ngx-bootstrap/chronos/types';
export declare function addParseToken(token: string | string[], callback: DateParseTokenFn | number): void;
export declare function addWeekParseToken(token: string[], callback: DateParseTokenFn): void;
export declare function addTimeToArrayFromToken(token: string, input: string, config: DateParsingConfig): DateParsingConfig;
