import 'ngx-bootstrap/chronos/units';
import { Locale } from 'ngx-bootstrap/chronos/locale/locale.class';
export declare function formatDate(date: Date, format: string, locale?: string, isUTC?: boolean, offset?: number): string;
export declare function formatMoment(date: Date, _format: string, locale: Locale, isUTC?: boolean, offset?: number): string;
export declare function expandFormat(_format: string, locale: Locale): string;
