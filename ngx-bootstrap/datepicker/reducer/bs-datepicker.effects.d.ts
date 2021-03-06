import { Observable } from 'rxjs';
import { BsDatepickerAbstractComponent } from 'ngx-bootstrap/datepicker/base/bs-datepicker-container';
import { BsDatepickerActions } from 'ngx-bootstrap/datepicker/reducer/bs-datepicker.actions';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/bs-datepicker.config';
import { BsDatepickerStore } from 'ngx-bootstrap/datepicker/reducer/bs-datepicker.store';
import { BsLocaleService } from 'ngx-bootstrap/datepicker/bs-locale.service';
import { BsDatepickerViewMode, DatepickerRenderOptions, DatepickerDateCustomClasses, DatepickerDateTooltipText, DaysCalendarViewModel, MonthsCalendarViewModel, YearsCalendarViewModel } from 'ngx-bootstrap/datepicker/models';
import * as ɵngcc0 from '@angular/core';
export declare class BsDatepickerEffects {
    private _actions;
    private _localeService;
    viewMode: Observable<BsDatepickerViewMode>;
    daysCalendar: Observable<DaysCalendarViewModel[]>;
    monthsCalendar: Observable<MonthsCalendarViewModel[]>;
    yearsCalendar: Observable<YearsCalendarViewModel[]>;
    options: Observable<DatepickerRenderOptions>;
    private _store;
    private _subs;
    constructor(_actions: BsDatepickerActions, _localeService: BsLocaleService);
    init(_bsDatepickerStore: BsDatepickerStore): BsDatepickerEffects;
    /** setters */
    setValue(value: Date): void;
    setRangeValue(value: Date[]): void;
    setMinDate(value: Date): BsDatepickerEffects;
    setMaxDate(value: Date): BsDatepickerEffects;
    setDaysDisabled(value: number[]): BsDatepickerEffects;
    setDatesDisabled(value: Date[]): BsDatepickerEffects;
    setDatesEnabled(value: Date[]): BsDatepickerEffects;
    setDisabled(value: boolean): BsDatepickerEffects;
    setDateCustomClasses(value: DatepickerDateCustomClasses[]): BsDatepickerEffects;
    setDateTooltipTexts(value: DatepickerDateTooltipText[]): BsDatepickerEffects;
    setOptions(_config: BsDatepickerConfig): BsDatepickerEffects;
    /** view to mode bindings */
    setBindings(container: BsDatepickerAbstractComponent): BsDatepickerEffects;
    /** event handlers */
    setEventHandlers(container: BsDatepickerAbstractComponent): BsDatepickerEffects;
    registerDatepickerSideEffects(): BsDatepickerEffects;
    destroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BsDatepickerEffects, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<BsDatepickerEffects>;
}

//# sourceMappingURL=bs-datepicker.effects.d.ts.map
