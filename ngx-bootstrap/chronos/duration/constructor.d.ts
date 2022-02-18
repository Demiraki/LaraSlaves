import { DateParsingConfig } from 'ngx-bootstrap/chronos/create/parsing.types';
import { DateObject } from 'ngx-bootstrap/chronos/types';
import { Locale } from 'ngx-bootstrap/chronos/locale/locale.class';
export declare class Duration {
    _milliseconds: number;
    _days: number;
    _months: number;
    _data: Partial<DateObject>;
    _locale: Locale;
    _isValid: boolean;
    constructor(duration: Partial<DateObject>, config?: DateParsingConfig);
    isValid(): boolean;
    humanize(withSuffix?: boolean): string;
    localeData(): Locale;
    locale(): string;
    locale(localeKey: string): Duration;
    abs(): Duration;
    as(_units: string): number;
    valueOf(): number;
}
export declare function isDuration(obj: any): obj is Duration;
