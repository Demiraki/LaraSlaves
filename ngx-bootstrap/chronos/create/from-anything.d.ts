import { DateParsingConfig } from 'ngx-bootstrap/chronos/create/parsing.types';
import { DateInput } from 'ngx-bootstrap/chronos/test/chain';
export declare function prepareConfig(config: DateParsingConfig): DateParsingConfig;
export declare function createLocalOrUTC(input: DateInput, format?: string | string[], localeKey?: string, strict?: boolean, isUTC?: boolean): DateParsingConfig;
