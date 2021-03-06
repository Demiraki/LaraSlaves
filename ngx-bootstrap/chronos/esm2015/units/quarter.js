/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { addFormatToken } from 'ngx-bootstrap/chronos/esm2015/format/format';
import { addRegexToken, match1 } from 'ngx-bootstrap/chronos/esm2015/parse/regex';
import { addParseToken } from 'ngx-bootstrap/chronos/esm2015/parse/token';
import { MONTH } from 'ngx-bootstrap/chronos/esm2015/units/constants';
import { toInt } from 'ngx-bootstrap/chronos/esm2015/utils/type-checks';
import { getMonth } from 'ngx-bootstrap/chronos/esm2015/utils/date-getters';
import { addUnitPriority } from 'ngx-bootstrap/chronos/esm2015/units/priorities';
import { addUnitAlias } from 'ngx-bootstrap/chronos/esm2015/units/aliases';
import { setMonth } from 'ngx-bootstrap/chronos/esm2015/utils/date-setters';
/**
 * @return {?}
 */
export function initQuarter() {
    // FORMATTING
    addFormatToken('Q', null, 'Qo', (/**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function (date, opts) {
        return getQuarter(date, opts.isUTC)
            .toString(10);
    }));
    // ALIASES
    addUnitAlias('quarter', 'Q');
    // PRIORITY
    addUnitPriority('quarter', 7);
    // PARSING
    addRegexToken('Q', match1);
    addParseToken('Q', (/**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */
    function (input, array, config) {
        array[MONTH] = (toInt(input) - 1) * 3;
        return config;
    }));
}
// MOMENTS
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
export function getQuarter(date, isUTC = false) {
    return Math.ceil((getMonth(date, isUTC) + 1) / 3);
}
/**
 * @param {?} date
 * @param {?} quarter
 * @param {?=} isUTC
 * @return {?}
 */
export function setQuarter(date, quarter, isUTC) {
    return setMonth(date, (quarter - 1) * 3 + getMonth(date, isUTC) % 3, isUTC);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVhcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy8iLCJzb3VyY2VzIjpbInVuaXRzL3F1YXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRXpDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQUdqRCxNQUFNLFVBQVUsV0FBVztJQUMzQixhQUFhO0lBRVgsY0FBYyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSTs7Ozs7SUFDNUIsVUFBUyxJQUFVLEVBQUUsSUFBMEI7UUFDN0MsT0FBTyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDaEMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xCLENBQUMsRUFDRixDQUFDO0lBRUosVUFBVTtJQUVSLFlBQVksQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFFL0IsV0FBVztJQUVULGVBQWUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFaEMsVUFBVTtJQUVSLGFBQWEsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDM0IsYUFBYSxDQUFDLEdBQUc7Ozs7OztJQUFFLFVBQVMsS0FBYSxFQUFFLEtBQWdCLEVBQUUsTUFBeUI7UUFDcEYsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV0QyxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDLEVBQUMsQ0FBQztBQUNMLENBQUM7Ozs7Ozs7QUFJRCxNQUFNLFVBQVUsVUFBVSxDQUFDLElBQVUsRUFBRSxLQUFLLEdBQUcsS0FBSztJQUNsRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3BELENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsVUFBVSxDQUFDLElBQVUsRUFBRSxPQUFlLEVBQUUsS0FBZTtJQUNyRSxPQUFPLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzlFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgYWRkUmVnZXhUb2tlbiwgbWF0Y2gxIH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xuaW1wb3J0IHsgYWRkUGFyc2VUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcbmltcG9ydCB7IE1PTlRIIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBnZXRNb250aCB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XG5pbXBvcnQgeyBEYXRlQXJyYXksIERhdGVGb3JtYXR0ZXJPcHRpb25zIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgYWRkVW5pdFByaW9yaXR5IH0gZnJvbSAnLi9wcmlvcml0aWVzJztcbmltcG9ydCB7IGFkZFVuaXRBbGlhcyB9IGZyb20gJy4vYWxpYXNlcyc7XG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLnR5cGVzJztcbmltcG9ydCB7IHNldE1vbnRoIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1zZXR0ZXJzJztcblxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFF1YXJ0ZXIoKSB7XG4vLyBGT1JNQVRUSU5HXG5cbiAgYWRkRm9ybWF0VG9rZW4oJ1EnLCBudWxsLCAnUW8nLFxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBnZXRRdWFydGVyKGRhdGUsIG9wdHMuaXNVVEMpXG4gICAgICAgIC50b1N0cmluZygxMCk7XG4gICAgfVxuICApO1xuXG4vLyBBTElBU0VTXG5cbiAgYWRkVW5pdEFsaWFzKCdxdWFydGVyJywgJ1EnKTtcblxuLy8gUFJJT1JJVFlcblxuICBhZGRVbml0UHJpb3JpdHkoJ3F1YXJ0ZXInLCA3KTtcblxuLy8gUEFSU0lOR1xuXG4gIGFkZFJlZ2V4VG9rZW4oJ1EnLCBtYXRjaDEpO1xuICBhZGRQYXJzZVRva2VuKCdRJywgZnVuY3Rpb24oaW5wdXQ6IHN0cmluZywgYXJyYXk6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgICBhcnJheVtNT05USF0gPSAodG9JbnQoaW5wdXQpIC0gMSkgKiAzO1xuXG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfSk7XG59XG5cbi8vIE1PTUVOVFNcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFF1YXJ0ZXIoZGF0ZTogRGF0ZSwgaXNVVEMgPSBmYWxzZSk6IG51bWJlciB7XG4gIHJldHVybiBNYXRoLmNlaWwoKGdldE1vbnRoKGRhdGUsIGlzVVRDKSArIDEpIC8gMyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRRdWFydGVyKGRhdGU6IERhdGUsIHF1YXJ0ZXI6IG51bWJlciwgaXNVVEM/OiBib29sZWFuKTogRGF0ZSB7XG4gIHJldHVybiBzZXRNb250aChkYXRlLCAocXVhcnRlciAtIDEpICogMyArIGdldE1vbnRoKGRhdGUsIGlzVVRDKSAlIDMsIGlzVVRDKTtcbn1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGdldFNldFF1YXJ0ZXIoaW5wdXQpIHtcbi8vICAgcmV0dXJuIGlucHV0ID09IG51bGxcbi8vICAgICA/IE1hdGguY2VpbCgodGhpcy5tb250aCgpICsgMSkgLyAzKVxuLy8gICAgIDogdGhpcy5tb250aCgoaW5wdXQgLSAxKSAqIDMgKyB0aGlzLm1vbnRoKCkgJSAzKTtcbi8vIH1cbiJdfQ==
