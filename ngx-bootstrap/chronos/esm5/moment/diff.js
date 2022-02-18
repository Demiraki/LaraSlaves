/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { cloneWithOffset, getDateOffset, getUTCOffset } from 'ngx-bootstrap/chronos/esm5/units/offset';
import { absFloor } from 'ngx-bootstrap/chronos/esm5/utils';
import { isDateValid, isNumber } from 'ngx-bootstrap/chronos/esm5/utils/type-checks';
import { getFullYear, getMonth } from 'ngx-bootstrap/chronos/esm5/utils/date-getters';
import { add } from 'ngx-bootstrap/chronos/esm5/moment/add-subtract';
import { cloneDate } from 'ngx-bootstrap/chronos/esm5/create/clone';
/**
 * @param {?} date
 * @param {?} input
 * @param {?} units
 * @param {?} asFloat
 * @param {?=} config
 * @return {?}
 */
export function diff(date, input, units, asFloat, config) {
    if (config === void 0) { config = {}; }
    if (!isDateValid(date)) {
        return NaN;
    }
    /** @type {?} */
    var that = cloneWithOffset(input, date, config);
    if (!isDateValid(that)) {
        return NaN;
    }
    /** @type {?} */
    var zoneOffset = (getDateOffset(input) - getDateOffset(date)) * 6e4;
    /** @type {?} */
    var zoneDelta = isNumber(config._zoneDelta)
        ? config._zoneDelta * 6e4
        : (getUTCOffset(input, config) - getUTCOffset(date, config)) * 6e4;
    /** @type {?} */
    var output;
    switch (units) {
        case 'year':
            output = monthDiff(date, that) / 12;
            break;
        case 'month':
            output = monthDiff(date, that);
            break;
        case 'quarter':
            output = monthDiff(date, that) / 3;
            break;
        case 'seconds':
            output = (date.valueOf() - that.valueOf()) / 1e3;
            break; // 1000
        case 'minutes':
            output = (date.valueOf() - that.valueOf()) / 6e4;
            break; // 1000 * 60
        case 'hours':
            output = (date.valueOf() - that.valueOf()) / 36e5;
            break; // 1000 * 60 * 60
        case 'day':
            output = (date.valueOf() - that.valueOf() - (zoneDelta === 0 ? zoneOffset : zoneDelta)) / 864e5;
            break; // 1000 * 60 * 60 * 24, negate dst
        case 'week':
            output = (date.valueOf() - that.valueOf() - zoneDelta) / 6048e5;
            break; // 1000 * 60 * 60 * 24 * 7, negate dst
        default:
            output = date.valueOf() - that.valueOf();
    }
    return asFloat ? output : absFloor(output);
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function monthDiff(a, b) {
    // difference in months
    /** @type {?} */
    var wholeMonthDiff = ((getFullYear(b) - getFullYear(a)) * 12) + (getMonth(b) - getMonth(a));
    // b is in (anchor - 1 month, anchor + 1 month)
    /** @type {?} */
    var anchor = add(cloneDate(a), wholeMonthDiff, 'month');
    /** @type {?} */
    var anchor2;
    /** @type {?} */
    var adjust;
    if (b.valueOf() - anchor.valueOf() < 0) {
        anchor2 = add(cloneDate(a), wholeMonthDiff - 1, 'month');
        // linear across the month
        adjust = (b.valueOf() - anchor.valueOf()) / (anchor.valueOf() - anchor2.valueOf());
    }
    else {
        anchor2 = add(cloneDate(a), wholeMonthDiff + 1, 'month');
        // linear across the month
        adjust = (b.valueOf() - anchor.valueOf()) / (anchor2.valueOf() - anchor.valueOf());
    }
    // check for negative zero, return zero if negative zero
    return -(wholeMonthDiff + adjust) || 0;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlmZi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy8iLCJzb3VyY2VzIjpbIm1vbWVudC9kaWZmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUcvRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7Ozs7QUFFNUMsTUFBTSxVQUFVLElBQUksQ0FBQyxJQUFVLEVBQUUsS0FBVyxFQUN2QixLQUFpQixFQUFFLE9BQWdCLEVBQ25DLE1BQThCO0lBQTlCLHVCQUFBLEVBQUEsV0FBOEI7SUFFakQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUN0QixPQUFPLEdBQUcsQ0FBQztLQUNaOztRQUVLLElBQUksR0FBRyxlQUFlLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUM7SUFFakQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUN0QixPQUFPLEdBQUcsQ0FBQztLQUNaOztRQUVLLFVBQVUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHOztRQUMvRCxTQUFTLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDM0MsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsR0FBRztRQUN6QixDQUFD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QUMsT0FBTyxFQUFFLENBQUMsQ0FBQztLQUNwRjtTQUFNO1FBQ0wsT0FBTyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsY0FBYyxHQUFHLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN6RCwwQkFBMEI7UUFDMUIsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFHLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0tBQ3BGO0lBRUQsd0RBQXdEO0lBQ3hELE9BQU8sQ0FBQyxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNsb25lV2l0aE9mZnNldCwgZ2V0RGF0ZU9mZnNldCwgZ2V0VVRDT2Zmc2V0IH0gZnJvbSAnLi4vdW5pdHMvb2Zmc2V0JztcbmltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmcudHlwZXMnO1xuaW1wb3J0IHsgVW5pdE9mVGltZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGFic0Zsb29yIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgaXNEYXRlVmFsaWQsIGlzTnVtYmVyIH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuaW1wb3J0IHsgZ2V0RnVsbFllYXIsIGdldE1vbnRoIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcbmltcG9ydCB7IGFkZCB9IGZyb20gJy4vYWRkLXN1YnRyYWN0JztcbmltcG9ydCB7IGNsb25lRGF0ZSB9IGZyb20gJy4uL2NyZWF0ZS9jbG9uZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBkaWZmKGRhdGU6IERhdGUsIGlucHV0OiBEYXRlLFxuICAgICAgICAgICAgICAgICAgICAgdW5pdHM6IFVuaXRPZlRpbWUsIGFzRmxvYXQ6IGJvb2xlYW4sXG4gICAgICAgICAgICAgICAgICAgICBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnID0ge31cbiAgICAgICAgICAgICAgICAgICAgICk6IG51bWJlciB7XG4gIGlmICghaXNEYXRlVmFsaWQoZGF0ZSkpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgY29uc3QgdGhhdCA9IGNsb25lV2l0aE9mZnNldChpbnB1dCwgZGF0ZSwgY29uZmlnKTtcblxuICBpZiAoIWlzRGF0ZVZhbGlkKHRoYXQpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIGNvbnN0IHpvbmVPZmZzZXQgPSAoZ2V0RGF0ZU9mZnNldChpbnB1dCkgLSBnZXREYXRlT2Zmc2V0KGRhdGUpKSAqIDZlNDtcbiAgY29uc3Qgem9uZURlbHRhID0gaXNOdW1iZXIoY29uZmlnLl96b25lRGVsdGEpXG4gICAgPyBjb25maWcuX3pvbmVEZWx0YSAqIDZlNFxuICAgIDogKGdldFVUQ09mZnNldChpbnB1dCwgY29uZmlnKSAtIGdldFVUQ09mZnNldChkYXRlLCBjb25maWcpKSAqIDZlNDtcblxuICBsZXQgb3V0cHV0O1xuICBzd2l0Y2ggKHVuaXRzKSB7XG4gICAgY2FzZSAneWVhcic6XG4gICAgICBvdXRwdXQgPSBtb250aERpZmYoZGF0ZSwgdGhhdCkgLyAxMjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgIG91dHB1dCA9IG1vbnRoRGlmZihkYXRlLCB0aGF0KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3F1YXJ0ZXInOlxuICAgICAgb3V0cHV0ID0gbW9udGhEaWZmKGRhdGUsIHRoYXQpIC8gMztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgICAgb3V0cHV0ID0gKGRhdGUudmFsdWVPZigpIC0gdGhhdC52YWx1ZU9mKCkpIC8gMWUzO1xuICAgICAgYnJlYWs7IC8vIDEwMDBcbiAgICBjYXNlICdtaW51dGVzJzpcbiAgICAgIG91dHB1dCA9IChkYXRlLnZhbHVlT2YoKSAtIHRoYXQudmFsdWVPZigpKSAvIDZlNDtcbiAgICAgIGJyZWFrOyAvLyAxMDAwICogNjBcbiAgICBjYXNlICdob3Vycyc6XG4gICAgICBvdXRwdXQgPSAoZGF0ZS52YWx1ZU9mKCkgLSB0aGF0LnZhbHVlT2YoKSkgLyAzNmU1O1xuICAgICAgYnJlYWs7IC8vIDEwMDAgKiA2MCAqIDYwXG4gICAgY2FzZSAnZGF5JzpcbiAgICAgIG91dHB1dCA9IChkYXRlLnZhbHVlT2YoKSAtIHRoYXQudmFsdWVPZigpIC0gKHpvbmVEZWx0YSA9PT0gMCA/IHpvbmVPZmZzZXQgOiB6b25lRGVsdGEpKSAvIDg2NGU1O1xuICAgICAgYnJlYWs7IC8vIDEwMDAgKiA2MCAqIDYwICogMjQsIG5lZ2F0ZSBkc3RcbiAgICBjYXNlICd3ZWVrJzpcbiAgICAgIG91dHB1dCA9IChkYXRlLnZhbHVlT2YoKSAtIHRoYXQudmFsdWVPZigpIC0gem9uZURlbHRhKSAvIDYwNDhlNTtcbiAgICAgIGJyZWFrOyAvLyAxMDAwICogNjAgKiA2MCAqIDI0ICogNywgbmVnYXRlIGRzdFxuICAgIGRlZmF1bHQ6XG4gICAgICBvdXRwdXQgPSBkYXRlLnZhbHVlT2YoKSAtIHRoYXQudmFsdWVPZigpO1xuICB9XG5cbiAgcmV0dXJuIGFzRmxvYXQgPyBvdXRwdXQgOiBhYnNGbG9vcihvdXRwdXQpO1xufVxuXG5mdW5jdGlvbiBtb250aERpZmYoYTogRGF0ZSwgYjogRGF0ZSk6IG51bWJlciB7XG4gIC8vIGRpZmZlcmVuY2UgaW4gbW9udGhzXG4gIGNvbnN0IHdob2xlTW9udGhEaWZmID0gKChnZXRGdWxsWWVhcihiKSAtIGdldEZ1bGxZZWFyKGEpKSAqIDEyKSArIChnZXRNb250aChiKSAtIGdldE1vbnRoKGEpKTtcbi8vIGIgaXMgaW4gKGFuY2hvciAtIDEgbW9udGgsIGFuY2hvciArIDEgbW9udGgpXG4gIGNvbnN0IGFuY2hvciA9IGFkZChjbG9uZURhdGUoYSksIHdob2xlTW9udGhEaWZmLCAnbW9udGgnKTtcbiAgbGV0IGFuY2hvcjI7XG4gIGxldCBhZGp1c3Q7XG5cblxuICBpZiAoYi52YWx1ZU9mKCkgLSBhbmNob3IudmFsdWVPZigpIDwgMCkge1xuICAgIGFuY2hvcjIgPSBhZGQoY2xvbmVEYXRlKGEpLCB3aG9sZU1vbnRoRGlmZiAtIDEsICdtb250aCcpO1xuICAgIC8vIGxpbmVhciBhY3Jvc3MgdGhlIG1vbnRoXG4gICAgYWRqdXN0ID0gKGIudmFsdWVPZigpIC0gYW5jaG9yLnZhbHVlT2YoKSkgLyAoYW5jaG9yLnZhbHVlT2YoKSAtIGFuY2hvcjIudmFsdWVPZigpKTtcbiAgfSBlbHNlIHtcbiAgICBhbmNob3IyID0gYWRkKGNsb25lRGF0ZShhKSwgd2hvbGVNb250aERpZmYgKyAxLCAnbW9udGgnKTtcbiAgICAvLyBsaW5lYXIgYWNyb3NzIHRoZSBtb250aFxuICAgIGFkanVzdCA9IChiLnZhbHVlT2YoKSAtIGFuY2hvci52YWx1ZU9mKCkpIC8gKGFuY2hvcjIudmFsdWVPZigpIC0gYW5jaG9yLnZhbHVlT2YoKSk7XG4gIH1cblxuICAvLyBjaGVjayBmb3IgbmVnYXRpdmUgemVybywgcmV0dXJuIHplcm8gaWYgbmVnYXRpdmUgemVyb1xuICByZXR1cm4gLSh3aG9sZU1vbnRoRGlmZiArIGFkanVzdCkgfHwgMDtcbn1cbiJdfQ==
