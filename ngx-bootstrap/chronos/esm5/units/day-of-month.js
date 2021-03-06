/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { addFormatToken } from 'ngx-bootstrap/chronos/esm5/format/format';
import { getDate } from 'ngx-bootstrap/chronos/esm5/utils/date-getters';
import { addRegexToken, match1to2, match2 } from 'ngx-bootstrap/chronos/esm5/parse/regex';
import { addParseToken } from 'ngx-bootstrap/chronos/esm5/parse/token';
import { DATE } from 'ngx-bootstrap/chronos/esm5/units/constants';
import { toInt } from 'ngx-bootstrap/chronos/esm5/utils/type-checks';
import { addUnitAlias } from 'ngx-bootstrap/chronos/esm5/units/aliases';
import { addUnitPriority } from 'ngx-bootstrap/chronos/esm5/units/priorities';
/**
 * @return {?}
 */
export function initDayOfMonth() {
    // FORMATTING
    addFormatToken('D', ['DD', 2, false], 'Do', (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        return getDate(date, opts.isUTC)
            .toString(10);
    }));
    // ALIASES
    addUnitAlias('date', 'D');
    // PRIOROITY
    addUnitPriority('date', 9);
    // PARSING
    addRegexToken('D', match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', (/**
     * @param {?} isStrict
     * @param {?} locale
     * @return {?}
     */
    function (isStrict, locale) {
        return locale._dayOfMonthOrdinalParse || locale._ordinalParse;
    }));
    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', (/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */
    function (input, array, config) {
        array[DATE] = toInt(input.match(match1to2)[0]);
        return config;
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5LW9mLW1vbnRoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zLyIsInNvdXJjZXMiOlsidW5pdHMvZGF5LW9mLW1vbnRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2hELE9BQU8sRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ25DLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7QUFJL0MsTUFBTSxVQUFVLGNBQWM7SUFDOUIsYUFBYTtJQUVYLGNBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLElBQUk7Ozs7O0lBQ3hDLFVBQVMsSUFBVSxFQUFFLElBQTBCO1FBQzdDLE9BQU8sT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQzdCLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNsQixDQUFDLEVBQ0YsQ0FBQztJQUVKLFVBQVU7SUFFUixZQUFZLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBRTVCLFlBQVk7SUFDVixlQUFlLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRTdCLFVBQVU7SUFFUixhQUFhLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzlCLGFBQWEsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLGFBQWEsQ0FBQyxJQUFJOzs7OztJQUFFLFVBQVMsUUFBUSxFQUFFLE1BQU07UUFDM0MsT0FBTyxNQUFNLENBQUMsdUJBQXVCLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUNoRSxDQUFDLEVBQUMsQ0FBQztJQUVILGFBQWEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqQyxhQUFhLENBQ1gsSUFBSTs7Ozs7O0lBQ0osVUFBUyxLQUFhLEVBQUUsS0FBZ0IsRUFBRSxNQUF5QjtRQUNqRSxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUvQyxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDLEVBQ0YsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgZ2V0RGF0ZSB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XG5pbXBvcnQgeyBhZGRSZWdleFRva2VuLCBtYXRjaDF0bzIsIG1hdGNoMiB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcbmltcG9ydCB7IGFkZFBhcnNlVG9rZW4gfSBmcm9tICcuLi9wYXJzZS90b2tlbic7XG5pbXBvcnQgeyBEQVRFIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBEYXRlQXJyYXksIERhdGVGb3JtYXR0ZXJPcHRpb25zIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgYWRkVW5pdEFsaWFzIH0gZnJvbSAnLi9hbGlhc2VzJztcbmltcG9ydCB7IGFkZFVuaXRQcmlvcml0eSB9IGZyb20gJy4vcHJpb3JpdGllcyc7XG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLnR5cGVzJztcblxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdERheU9mTW9udGgoKSB7XG4vLyBGT1JNQVRUSU5HXG5cbiAgYWRkRm9ybWF0VG9rZW4oJ0QnLCBbJ0REJywgMiwgZmFsc2VdLCAnRG8nLFxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBnZXREYXRlKGRhdGUsIG9wdHMuaXNVVEMpXG4gICAgICAgIC50b1N0cmluZygxMCk7XG4gICAgfVxuICApO1xuXG4vLyBBTElBU0VTXG5cbiAgYWRkVW5pdEFsaWFzKCdkYXRlJywgJ0QnKTtcblxuLy8gUFJJT1JPSVRZXG4gIGFkZFVuaXRQcmlvcml0eSgnZGF0ZScsIDkpO1xuXG4vLyBQQVJTSU5HXG5cbiAgYWRkUmVnZXhUb2tlbignRCcsIG1hdGNoMXRvMik7XG4gIGFkZFJlZ2V4VG9rZW4oJ0REJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuICBhZGRSZWdleFRva2VuKCdEbycsIGZ1bmN0aW9uKGlzU3RyaWN0LCBsb2NhbGUpIHtcbiAgICByZXR1cm4gbG9jYWxlLl9kYXlPZk1vbnRoT3JkaW5hbFBhcnNlIHx8IGxvY2FsZS5fb3JkaW5hbFBhcnNlO1xuICB9KTtcblxuICBhZGRQYXJzZVRva2VuKFsnRCcsICdERCddLCBEQVRFKTtcbiAgYWRkUGFyc2VUb2tlbihcbiAgICAnRG8nLFxuICAgIGZ1bmN0aW9uKGlucHV0OiBzdHJpbmcsIGFycmF5OiBEYXRlQXJyYXksIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gICAgICBhcnJheVtEQVRFXSA9IHRvSW50KGlucHV0Lm1hdGNoKG1hdGNoMXRvMilbMF0pO1xuXG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cbiAgKTtcbn1cbiJdfQ==
