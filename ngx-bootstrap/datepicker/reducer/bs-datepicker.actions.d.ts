import { TimeUnit } from 'ngx-bootstrap/chronos';
import { Action } from 'ngx-bootstrap/mini-ngrx';
import { BsDatepickerViewMode, BsViewNavigationEvent, CellHoverEvent, DatepickerRenderOptions, DatepickerDateCustomClasses, DatepickerDateTooltipText } from '../models';
import * as ɵngcc0 from '@angular/core';
export declare class BsDatepickerActions {
    static readonly CALCULATE = "[datepicker] calculate dates matrix";
    static readonly FORMAT = "[datepicker] format datepicker values";
    static readonly FLAG = "[datepicker] set flags";
    static readonly SELECT = "[datepicker] select date";
    static readonly NAVIGATE_OFFSET = "[datepicker] shift view date";
    static readonly NAVIGATE_TO = "[datepicker] change view date";
    static readonly SET_OPTIONS = "[datepicker] update render options";
    static readonly HOVER = "[datepicker] hover date";
    static readonly CHANGE_VIEWMODE = "[datepicker] switch view mode";
    static readonly SET_MIN_DATE = "[datepicker] set min date";
    static readonly SET_MAX_DATE = "[datepicker] set max date";
    static readonly SET_DAYSDISABLED = "[datepicker] set days disabled";
    static readonly SET_DATESDISABLED = "[datepicker] set dates disabled";
    static readonly SET_DATESENABLED = "[datepicker] set dates enabled";
    static readonly SET_IS_DISABLED = "[datepicker] set is disabled";
    static readonly SET_DATE_CUSTOM_CLASSES = "[datepicker] set date custom classes";
    static readonly SET_DATE_TOOLTIP_TEXTS = "[datepicker] set date tooltip texts";
    static readonly SET_LOCALE = "[datepicker] set datepicker locale";
    static readonly SELECT_RANGE = "[daterangepicker] select dates range";
    calculate(): Action;
    format(): Action;
    flag(): Action;
    select(date: Date): Action;
    changeViewMode(event: BsDatepickerViewMode): Action;
    navigateTo(event: BsViewNavigationEvent): Action;
    navigateStep(step: TimeUnit): Action;
    setOptions(options: DatepickerRenderOptions): Action;
    selectRange(value: Date[]): Action;
    hoverDay(event: CellHoverEvent): Action;
    minDate(date: Date): Action;
    maxDate(date: Date): Action;
    daysDisabled(days: number[]): Action;
    datesDisabled(dates: Date[]): Action;
    datesEnabled(dates: Date[]): Action;
    isDisabled(value: boolean): Action;
    setDateCustomClasses(value: DatepickerDateCustomClasses[]): Action;
    setDateTooltipTexts(value: DatepickerDateTooltipText[]): Action;
    setLocale(locale: string): Action;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BsDatepickerActions, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<BsDatepickerActions>;
}

//# sourceMappingURL=bs-datepicker.actions.d.ts.map