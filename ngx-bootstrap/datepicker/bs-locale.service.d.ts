import { BehaviorSubject, Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class BsLocaleService {
    private _defaultLocale;
    private _locale;
    private _localeChange;
    get locale(): BehaviorSubject<string>;
    get localeChange(): Observable<string>;
    get currentLocale(): string;
    use(locale: string): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BsLocaleService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<BsLocaleService>;
}

//# sourceMappingURL=bs-locale.service.d.ts.map