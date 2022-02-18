import { DateParsingConfig } from 'ngx-bootstrap/chronos/create/parsing.types';
export declare function isValid(config: DateParsingConfig): boolean;
export declare function createInvalid(config: DateParsingConfig, flags?: {
    nullInput: boolean;
}): DateParsingConfig;
export declare function markInvalid(config: DateParsingConfig): DateParsingConfig;
