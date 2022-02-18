/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { daysInMonth } from 'ngx-bootstrap/chronos/esm5/units/month';
import { isNumber } from 'ngx-bootstrap/chronos/esm5/utils/type-checks';
import { getDate, getFullYear, getMonth } from 'ngx-bootstrap/chronos/esm5/utils/date-getters';
import { isLeapYear } from 'ngx-bootstrap/chronos/esm5/units/year';
import { createDate } from 'ngx-bootstrap/chronos/esm5/create/date-from-array';
/** @type {?} */
var defaultTimeUnit = {
    year: 0,
    month: 0,
    day: 0,
    hour: 0,
    minute: 0,
    seconds: 0
};
/**
 * @param {?} date
 * @param {?} unit
 * @return {?}
 */
export function shiftDate(date, unit) {
    /** @type {?} */
    var _unit = Object.assign({}, defaultTimeUnit, unit);
    /** @type {?} */
    var year = date.getFullYear() + (_unit.year || 0);
    /** @type {?} */
    var month = date.getMonth() + (_unit.month || 0);
    /** @type {?} */
    var day = date.getDate() + (_unit.day || 0);
    if (_unit.month && !_unit.day) {
        day = Math.min(day, daysInMonth(year, month));
    }
    return createDate(year, month, day, date.getHours() + (_unit.hour || 0), date.getMinutes() + (_unit.minute || 0), date.getSeconds() + (_unit.seconds || 0));
}
/**
 * @param {?} date
 * @param {?} unit
 * @return {?}
 */
export function setFullDate(date, unit) {
    return createDate(getNum(date.getFullYear(), unit.year), getNum(date.getMonth(), unit.month), 1, // day, to avoid issue with wrong months selection at the end of current month (#5371)
    getNum(date.getHours(), unit.hour), getNum(date.getMinutes(), unit.minute), getNum(date.getSeconds(), unit.seconds), getNum(date.getMilliseconds(), unit.milliseconds));
}
/**
 * @param {?} def
 * @param {?=} num
 * @return {?}
 */
function getNum(def, num) {
    return isNumber(num) ? num : def;
}
/**
 * @param {?} date
 * @param {?} value
 * @param {?=} isUTC
 * @return {?}
 */
export function setFullYear(date, value, isUTC) {
    /** @type {?} */
    var _month = getMonth(date, isUTC);
    /** @type {?} */
    var _date = getDate(date, isUTC);
    /** @type {?} */
    var _year = getFullYear(date, isUTC);
    if (isLeapYear(_year) && _month === 1 && _date === 29) {
        /** @type {?} */
        var _daysInMonth = daysInMonth(value, _month);
        isUTC ? date.setUTCFullYear(value, _month, _daysInMonth) : date.setFullYear(value, _month, _daysInMonth);
    }
    isUTC ? date.setUTCFullYear(value) : date.setFullYear(value);
    return date;
}
/**
 * @param {?} date
 * @param {?} value
 * @param {?=} isUTC
 * @return {?}
 */
export function setMonth(date, value, isUTC) {
    /** @type {?} */
    var dayOfMonth = Math.min(getDate(date), daysInMonth(getFullYear(date), value));
    isUTC ? date.setUTCMonth(value, dayOfMonth) : date.setMonth(value, dayOfMonth);
    return date;
}
/**
 * @param {?} date
 * @param {?} value
 * @param {?=} isUTC
 * @return {?}
 */
export function setDay(date, value, isUTC) {
    isUTC ? date.setUTCDate(value) : date.setDate(value);
    return date;
}
/**
 * @param {?} date
 * @param {?} value
 * @param {?=} isUTC
 * @return {?}
 */
export function setHours(date, value, isUTC) {
    isUTC ? date.setUTCHours(value) : date.setHours(value);
    return date;
}
/**
 * @param {?} date
 * @param {?} value
 * @param {?=} isUTC
 * @return {?}
 */
export function setMinutes(date, value, isUTC) {
    isUTC ? date.setUTCMinutes(value) : date.setMinutes(value);
    return date;
}
/**
 * @param {?} date
 * @param {?} value
 * @param {?=} isUTC
 * @return {?}
 */
export function setSeconds(date, value, isUTC) {
    isUTC ? date.setUTCSeconds(value) : date.setSeconds(value);
    return date;
}
/**
 * @param {?} date
 * @param {?} value
 * @param {?=} isUTC
 * @return {?}
 */
export function setMilliseconds(date, value, isUTC) {
    isUTC ? date.setUTCMilliseconds(value) : date.setMilliseconds(value);
    return date;
}
/**
 * @param {?} date
 * @param {?} value
 * @param {?=} isUTC
 * @return {?}
 */
export function setDate(date, value, isUTC) {
    isUTC ? date.setUTCDate(value) : date.setDate(value);
    return date;
}
/**
 * @param {?} date
 * @param {?} value
 * @return {?}
 */
export function setTime(date, value) {
    date.setTime(value);
    return date;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1zZXR0ZXJzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zLyIsInNvdXJjZXMiOlsidXRpbHMvZGF0ZS1zZXR0ZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7SUFFakQsZUFBZSxHQUFhO0lBQ2hDLElBQUksRUFBRSxDQUFDO0lBQ1AsS0FBSyxFQUFFLENBQUM7SUFDUixHQUFHLEVBQUUsQ0FBQztJQUNOLElBQUksRUFBRSxDQUFDO0lBQ1AsTUFBTSxFQUFFLENBQUM7SUFDVCxPQUFPLEVBQUUsQ0FBQztDQUNYOzs7Ozs7QUFFRCxNQUFNLFVBQVUsU0FBUyxDQUFDLElBQVUsRUFBRSxJQUFjOztRQUM1QyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsZUFBZSxFQUFFLElBQUksQ0FBQzs7UUFDaEQsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDOztRQUM3QyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7O1FBQzlDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUMzQyxJQUFJLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFL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QUFDLElBQVUsRUFBRSxLQUFhLEVBQUUsS0FBZTtJQUN4RSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVyRSxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUFDLElBQVUsRUFBRSxLQUFhLEVBQUUsS0FBZTtJQUNoRSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFckQsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUFDLElBQVUsRUFBRSxLQUFhO0lBQy9DLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFcEIsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGltZVVuaXQgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBkYXlzSW5Nb250aCB9IGZyb20gJy4uL3VuaXRzL21vbnRoJztcbmltcG9ydCB7IGlzTnVtYmVyIH0gZnJvbSAnLi90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBnZXREYXRlLCBnZXRGdWxsWWVhciwgZ2V0TW9udGggfSBmcm9tICcuL2RhdGUtZ2V0dGVycyc7XG5pbXBvcnQgeyBpc0xlYXBZZWFyIH0gZnJvbSAnLi4vdW5pdHMveWVhcic7XG5pbXBvcnQgeyBjcmVhdGVEYXRlIH0gZnJvbSAnLi4vY3JlYXRlL2RhdGUtZnJvbS1hcnJheSc7XG5cbmNvbnN0IGRlZmF1bHRUaW1lVW5pdDogVGltZVVuaXQgPSB7XG4gIHllYXI6IDAsXG4gIG1vbnRoOiAwLFxuICBkYXk6IDAsXG4gIGhvdXI6IDAsXG4gIG1pbnV0ZTogMCxcbiAgc2Vjb25kczogMFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNoaWZ0RGF0ZShkYXRlOiBEYXRlLCB1bml0OiBUaW1lVW5pdCk6IERhdGUge1xuICBjb25zdCBfdW5pdCA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRUaW1lVW5pdCwgdW5pdCk7XG4gIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCkgKyAoX3VuaXQueWVhciB8fCAwKTtcbiAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAoX3VuaXQubW9udGggfHwgMCk7XG4gIGxldCBkYXkgPSBkYXRlLmdldERhdGUoKSArIChfdW5pdC5kYXkgfHwgMCk7XG4gIGlmIChfdW5pdC5tb250aCAmJiAhX3VuaXQuZGF5KSB7XG4gICAgZGF5ID0gTWF0aC5taW4oZGF5LCBkYXlzSW5Nb250aCh5ZWFyLCBtb250aCkpO1xuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZURhdGUoXG4gICAgeWVhcixcbiAgICBtb250aCxcbiAgICBkYXksXG4gICAgZGF0ZS5nZXRIb3VycygpICsgKF91bml0LmhvdXIgfHwgMCksXG4gICAgZGF0ZS5nZXRNaW51dGVzKCkgKyAoX3VuaXQubWludXRlIHx8IDApLFxuICAgIGRhdGUuZ2V0U2Vjb25kcygpICsgKF91bml0LnNlY29uZHMgfHwgMClcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEZ1bGxEYXRlKGRhdGU6IERhdGUsIHVuaXQ6IFRpbWVVbml0KTogRGF0ZSB7XG4gIHJldHVybiBjcmVhdGVEYXRlKFxuICAgIGdldE51bShkYXRlLmdldEZ1bGxZZWFyKCksIHVuaXQueWVhciksXG4gICAgZ2V0TnVtKGRhdGUuZ2V0TW9udGgoKSwgdW5pdC5tb250aCksXG4gICAgMSwgLy8gZGF5LCB0byBhdm9pZCBpc3N1ZSB3aXRoIHdyb25nIG1vbnRocyBzZWxlY3Rpb24gYXQgdGhlIGVuZCBvZiBjdXJyZW50IG1vbnRoICgjNTM3MSlcbiAgICBnZXROdW0oZGF0ZS5nZXRIb3VycygpLCB1bml0LmhvdXIpLFxuICAgIGdldE51bShkYXRlLmdldE1pbnV0ZXMoKSwgdW5pdC5taW51dGUpLFxuICAgIGdldE51bShkYXRlLmdldFNlY29uZHMoKSwgdW5pdC5zZWNvbmRzKSxcbiAgICBnZXROdW0oZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSwgdW5pdC5taWxsaXNlY29uZHMpXG4gICk7XG59XG5cbmZ1bmN0aW9uIGdldE51bShkZWY6IG51bWJlciwgbnVtPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIGlzTnVtYmVyKG51bSkgPyBudW0gOiBkZWY7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRGdWxsWWVhcihkYXRlOiBEYXRlLCB2YWx1ZTogbnVtYmVyLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcbiAgY29uc3QgX21vbnRoID0gZ2V0TW9udGgoZGF0ZSwgaXNVVEMpO1xuICBjb25zdCBfZGF0ZSA9IGdldERhdGUoZGF0ZSwgaXNVVEMpO1xuICBjb25zdCBfeWVhciA9IGdldEZ1bGxZZWFyKGRhdGUsIGlzVVRDKTtcbiAgaWYgKGlzTGVhcFllYXIoX3llYXIpICYmIF9tb250aCA9PT0gMSAmJiBfZGF0ZSA9PT0gMjkpIHtcbiAgICBjb25zdCBfZGF5c0luTW9udGggPSBkYXlzSW5Nb250aCh2YWx1ZSwgX21vbnRoKTtcbiAgICBpc1VUQyA/IGRhdGUuc2V0VVRDRnVsbFllYXIodmFsdWUsIF9tb250aCwgX2RheXNJbk1vbnRoKSA6IGRhdGUuc2V0RnVsbFllYXIodmFsdWUsIF9tb250aCwgX2RheXNJbk1vbnRoKTtcbiAgfVxuXG4gIGlzVVRDID8gZGF0ZS5zZXRVVENGdWxsWWVhcih2YWx1ZSkgOiBkYXRlLnNldEZ1bGxZZWFyKHZhbHVlKTtcblxuICByZXR1cm4gZGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldE1vbnRoKGRhdGU6IERhdGUsIHZhbHVlOiBudW1iZXIsIGlzVVRDPzogYm9vbGVhbik6IERhdGUge1xuICBjb25zdCBkYXlPZk1vbnRoID0gTWF0aC5taW4oZ2V0RGF0ZShkYXRlKSwgZGF5c0luTW9udGgoZ2V0RnVsbFllYXIoZGF0ZSksIHZhbHVlKSk7XG4gIGlzVVRDID8gZGF0ZS5zZXRVVENNb250aCh2YWx1ZSwgZGF5T2ZNb250aCkgOiBkYXRlLnNldE1vbnRoKHZhbHVlLCBkYXlPZk1vbnRoKTtcblxuICByZXR1cm4gZGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldERheShkYXRlOiBEYXRlLCB2YWx1ZTogbnVtYmVyLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcbiAgaXNVVEMgPyBkYXRlLnNldFVUQ0RhdGUodmFsdWUpIDogZGF0ZS5zZXREYXRlKHZhbHVlKTtcblxuICByZXR1cm4gZGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEhvdXJzKGRhdGU6IERhdGUsIHZhbHVlOiBudW1iZXIsIGlzVVRDPzogYm9vbGVhbik6IERhdGUge1xuICBpc1VUQyA/IGRhdGUuc2V0VVRDSG91cnModmFsdWUpIDogZGF0ZS5zZXRIb3Vycyh2YWx1ZSk7XG5cbiAgcmV0dXJuIGRhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRNaW51dGVzKGRhdGU6IERhdGUsIHZhbHVlOiBudW1iZXIsIGlzVVRDPzogYm9vbGVhbik6IERhdGUge1xuICBpc1VUQyA/IGRhdGUuc2V0VVRDTWludXRlcyh2YWx1ZSkgOiBkYXRlLnNldE1pbnV0ZXModmFsdWUpO1xuXG4gIHJldHVybiBkYXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0U2Vjb25kcyhkYXRlOiBEYXRlLCB2YWx1ZTogbnVtYmVyLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcbiAgaXNVVEMgPyBkYXRlLnNldFVUQ1NlY29uZHModmFsdWUpIDogZGF0ZS5zZXRTZWNvbmRzKHZhbHVlKTtcblxuICByZXR1cm4gZGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldE1pbGxpc2Vjb25kcyhkYXRlOiBEYXRlLCB2YWx1ZTogbnVtYmVyLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcbiAgaXNVVEMgPyBkYXRlLnNldFVUQ01pbGxpc2Vjb25kcyh2YWx1ZSkgOiBkYXRlLnNldE1pbGxpc2Vjb25kcyh2YWx1ZSk7XG5cbiAgcmV0dXJuIGRhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREYXRlKGRhdGU6IERhdGUsIHZhbHVlOiBudW1iZXIsIGlzVVRDPzogYm9vbGVhbik6IERhdGUge1xuICBpc1VUQyA/IGRhdGUuc2V0VVRDRGF0ZSh2YWx1ZSkgOiBkYXRlLnNldERhdGUodmFsdWUpO1xuXG4gIHJldHVybiBkYXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VGltZShkYXRlOiBEYXRlLCB2YWx1ZTogbnVtYmVyKTogRGF0ZSB7XG4gIGRhdGUuc2V0VGltZSh2YWx1ZSk7XG5cbiAgcmV0dXJuIGRhdGU7XG59XG4iXX0=
