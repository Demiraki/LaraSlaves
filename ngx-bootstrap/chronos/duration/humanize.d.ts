import { Locale } from 'ngx-bootstrap/chronos/locale/locale.class';
import { Duration } from 'ngx-bootstrap/chronos/duration/constructor';
export declare function relativeTime(posNegDuration: Duration, withoutSuffix: boolean, locale: Locale): string;
export declare function getSetRelativeTimeRounding(roundingFunction: any): boolean | Function;
export declare function getSetRelativeTimeThreshold(threshold: string, limit: number): boolean | number;
