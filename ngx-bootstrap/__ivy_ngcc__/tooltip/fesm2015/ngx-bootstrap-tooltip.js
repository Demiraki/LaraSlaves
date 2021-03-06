import { Injectable, ɵɵdefineInjectable, Component, ChangeDetectionStrategy, EventEmitter, Directive, ViewContainerRef, ElementRef, Renderer2, Input, Output, NgModule } from '@angular/core';
import { isBs3, warnOnce, parseTriggers, OnChange } from 'ngx-bootstrap/utils';
import { __decorate, __metadata } from 'tslib';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { timer } from 'rxjs';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default values provider for tooltip
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ngx-bootstrap/component-loader';
import * as ɵngcc2 from 'ngx-bootstrap/positioning';

const _c0 = ["*"];
class TooltipConfig {
    constructor() {
        /**
         * sets disable adaptive position
         */
        this.adaptivePosition = true;
        /**
         * tooltip placement, supported positions: 'top', 'bottom', 'left', 'right'
         */
        this.placement = 'top';
        /**
         * array of event names which triggers tooltip opening
         */
        this.triggers = 'hover focus';
        /**
         * delay before showing the tooltip
         */
        this.delay = 0;
    }
}
TooltipConfig.ɵfac = function TooltipConfig_Factory(t) { return new (t || TooltipConfig)(); };
/** @nocollapse */ TooltipConfig.ɵprov = ɵɵdefineInjectable({ factory: function TooltipConfig_Factory() { return new TooltipConfig(); }, token: TooltipConfig, providedIn: "root" });
if (false) {
    /**
     * sets disable adaptive position
     * @type {?}
     */
    TooltipConfig.prototype.adaptivePosition;
    /**
     * tooltip placement, supported positions: 'top', 'bottom', 'left', 'right'
     * @type {?}
     */
    TooltipConfig.prototype.placement;
    /**
     * array of event names which triggers tooltip opening
     * @type {?}
     */
    TooltipConfig.prototype.triggers;
    /**
     * a selector specifying the element the tooltip should be appended to.
     * @type {?}
     */
    TooltipConfig.prototype.container;
    /**
     * delay before showing the tooltip
     * @type {?}
     */
    TooltipConfig.prototype.delay;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TooltipContainerComponent {
    /**
     * @param {?} config
     */
    constructor(config) {
        Object.assign(this, config);
    }
    /**
     * @return {?}
     */
    get isBs3() {
        return isBs3();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.classMap = { in: false, fade: false };
        this.classMap[this.placement] = true;
        this.classMap[`tooltip-${this.placement}`] = true;
        this.classMap.in = true;
        if (this.animation) {
            this.classMap.fade = true;
        }
        if (this.containerClass) {
            this.classMap[this.containerClass] = true;
        }
    }
}
TooltipContainerComponent.ɵfac = function TooltipContainerComponent_Factory(t) { return new (t || TooltipContainerComponent)(ɵngcc0.ɵɵdirectiveInject(TooltipConfig)); };
TooltipContainerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TooltipContainerComponent, selectors: [["bs-tooltip-container"]], hostAttrs: ["role", "tooltip"], hostVars: 7, hostBindings: function TooltipContainerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("id", ctx.id);
        ɵngcc0.ɵɵclassMap("tooltip in tooltip-" + ctx.placement + " " + "bs-tooltip-" + ctx.placement + " " + ctx.placement + " " + ctx.containerClass);
        ɵngcc0.ɵɵclassProp("show", !ctx.isBs3)("bs3", ctx.isBs3);
    } }, ngContentSelectors: _c0, decls: 3, vars: 0, consts: [[1, "tooltip-arrow", "arrow"], [1, "tooltip-inner"]], template: function TooltipContainerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelement(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵprojection(2);
        ɵngcc0.ɵɵelementEnd();
    } }, styles: [".tooltip[_nghost-%COMP%] {\n      display: block;\n      pointer-events: none;\n    }\n    .bs3.tooltip.top[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%] {\n      margin-left: -2px;\n    }\n    .bs3.tooltip.bottom[_nghost-%COMP%] {\n      margin-top: 0px;\n    }\n    .bs3.bs-tooltip-left[_nghost-%COMP%], .bs3.bs-tooltip-right[_nghost-%COMP%]{\n      margin: 0px;\n    }\n    .bs3.bs-tooltip-right[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs3.bs-tooltip-left[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%] {\n      margin: .3rem 0;\n    }"], changeDetection: 0 });
/** @nocollapse */
TooltipContainerComponent.ctorParameters = () => [
    { type: TooltipConfig }
];
if (false) {
    /** @type {?} */
    TooltipContainerComponent.prototype.classMap;
    /** @type {?} */
    TooltipContainerComponent.prototype.placement;
    /** @type {?} */
    TooltipContainerComponent.prototype.containerClass;
    /** @type {?} */
    TooltipContainerComponent.prototype.animation;
    /** @type {?} */
    TooltipContainerComponent.prototype.id;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
let id = 0;
class TooltipDirective {
    /**
     * @param {?} _viewContainerRef
     * @param {?} cis
     * @param {?} config
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} _positionService
     */
    constructor(_viewContainerRef, cis, config, _elementRef, _renderer, _positionService) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._positionService = _positionService;
        this.tooltipId = id++;
        /**
         * Fired when tooltip content changes
         */
        /* tslint:disable-next-line:no-any */
        this.tooltipChange = new EventEmitter();
        /**
         * Css class for tooltip container
         */
        this.containerClass = '';
        /**
         * @deprecated - removed, will be added to configuration
         */
        this.tooltipAnimation = true;
        /**
         * @deprecated
         */
        this.tooltipFadeDuration = 150;
        /**
         * @deprecated
         */
        this.tooltipStateChanged = new EventEmitter();
        this._tooltip = cis
            .createLoader(this._elementRef, _viewContainerRef, this._renderer)
            .provide({ provide: TooltipConfig, useValue: config });
        Object.assign(this, config);
        this.onShown = this._tooltip.onShown;
        this.onHidden = this._tooltip.onHidden;
    }
    /**
     * Returns whether or not the tooltip is currently being shown
     * @return {?}
     */
    get isOpen() {
        return this._tooltip.isShown;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isOpen(value) {
        if (value) {
            this.show();
        }
        else {
            this.hide();
        }
    }
    /**
     * @deprecated - please use `tooltip` instead
     * @param {?} value
     * @return {?}
     */
    set htmlContent(value) {
        warnOnce('tooltipHtml was deprecated, please use `tooltip` instead');
        this.tooltip = value;
    }
    /**
     * @deprecated - please use `placement` instead
     * @param {?} value
     * @return {?}
     */
    set _placement(value) {
        warnOnce('tooltipPlacement was deprecated, please use `placement` instead');
        this.placement = value;
    }
    /**
     * @deprecated - please use `isOpen` instead
     * @param {?} value
     * @return {?}
     */
    set _isOpen(value) {
        warnOnce('tooltipIsOpen was deprecated, please use `isOpen` instead');
        this.isOpen = value;
    }
    /**
     * @return {?}
     */
    get _isOpen() {
        warnOnce('tooltipIsOpen was deprecated, please use `isOpen` instead');
        return this.isOpen;
    }
    /**
     * @deprecated - please use `isDisabled` instead
     * @param {?} value
     * @return {?}
     */
    set _enable(value) {
        warnOnce('tooltipEnable was deprecated, please use `isDisabled` instead');
        this.isDisabled = !value;
    }
    /**
     * @return {?}
     */
    get _enable() {
        warnOnce('tooltipEnable was deprecated, please use `isDisabled` instead');
        return this.isDisabled;
    }
    /**
     * @deprecated - please use `container="body"` instead
     * @param {?} value
     * @return {?}
     */
    set _appendToBody(value) {
        warnOnce('tooltipAppendToBody was deprecated, please use `container="body"` instead');
        this.container = value ? 'body' : this.container;
    }
    /**
     * @return {?}
     */
    get _appendToBody() {
        warnOnce('tooltipAppendToBody was deprecated, please use `container="body"` instead');
        return this.container === 'body';
    }
    /**
     * @deprecated - will replaced with customClass
     * @param {?} value
     * @return {?}
     */
    set _popupClass(value) {
        warnOnce('tooltipClass deprecated');
    }
    /**
     * @deprecated - removed
     * @param {?} value
     * @return {?}
     */
    set _tooltipContext(value) {
        warnOnce('tooltipContext deprecated');
    }
    /**
     * @deprecated
     * @param {?} value
     * @return {?}
     */
    set _tooltipPopupDelay(value) {
        warnOnce('tooltipPopupDelay is deprecated, use `delay` instead');
        this.delay = value;
    }
    /**
     * @deprecated -  please use `triggers` instead
     * @return {?}
     */
    get _tooltipTrigger() {
        warnOnce('tooltipTrigger was deprecated, please use `triggers` instead');
        return this.triggers;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set _tooltipTrigger(value) {
        warnOnce('tooltipTrigger was deprecated, please use `triggers` instead');
        this.triggers = (value || '').toString();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._tooltip.listen({
            triggers: this.triggers,
            show: (/**
             * @return {?}
             */
            () => this.show())
        });
        /* tslint:disable-next-line:no-any */
        this.tooltipChange.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            if (!value) {
                this._tooltip.hide();
            }
        }));
        this.onShown.subscribe((/**
         * @return {?}
         */
        () => {
            this.setAriaDescribedBy();
        }));
        this.onHidden.subscribe((/**
         * @return {?}
         */
        () => {
            this.setAriaDescribedBy();
        }));
    }
    /**
     * @return {?}
     */
    setAriaDescribedBy() {
        this._ariaDescribedby = this.isOpen ? `tooltip-${this.tooltipId}` : null;
        if (this._ariaDescribedby) {
            this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ariaDescribedby);
        }
        else {
            this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
        }
    }
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    toggle() {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    }
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    show() {
        this._positionService.setOptions({
            modifiers: {
                flip: {
                    enabled: this.adaptivePosition
                },
                preventOverflow: {
                    enabled: this.adaptivePosition
                }
            }
        });
        if (this.isOpen ||
            this.isDisabled ||
            this._delayTimeoutId ||
            !this.tooltip) {
            return;
        }
        /** @type {?} */
        const showTooltip = (/**
         * @return {?}
         */
        () => {
            if (this._delayTimeoutId) {
                this._delayTimeoutId = undefined;
            }
            this._tooltip
                .attach(TooltipContainerComponent)
                .to(this.container)
                .position({ attachment: this.placement })
                .show({
                content: this.tooltip,
                placement: this.placement,
                containerClass: this.containerClass,
                id: `tooltip-${this.tooltipId}`
            });
        });
        /** @type {?} */
        const cancelDelayedTooltipShowing = (/**
         * @return {?}
         */
        () => {
            if (this._tooltipCancelShowFn) {
                this._tooltipCancelShowFn();
            }
        });
        if (this.delay) {
            if (this._delaySubscription) {
                this._delaySubscription.unsubscribe();
            }
            this._delaySubscription = timer(this.delay).subscribe((/**
             * @return {?}
             */
            () => {
                showTooltip();
                cancelDelayedTooltipShowing();
            }));
            if (this.triggers) {
                parseTriggers(this.triggers)
                    .forEach((/**
                 * @param {?} trigger
                 * @return {?}
                 */
                (trigger) => {
                    this._tooltipCancelShowFn = this._renderer.listen(this._elementRef.nativeElement, trigger.close, (/**
                     * @return {?}
                     */
                    () => {
                        this._delaySubscription.unsubscribe();
                        cancelDelayedTooltipShowing();
                    }));
                }));
            }
        }
        else {
            showTooltip();
        }
    }
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    hide() {
        if (this._delayTimeoutId) {
            clearTimeout(this._delayTimeoutId);
            this._delayTimeoutId = undefined;
        }
        if (!this._tooltip.isShown) {
            return;
        }
        this._tooltip.instance.classMap.in = false;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this._tooltip.hide();
        }), this.tooltipFadeDuration);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._tooltip.dispose();
        this.tooltipChange.unsubscribe();
        if (this._delaySubscription) {
            this._delaySubscription.unsubscribe();
        }
        this.onShown.unsubscribe();
        this.onHidden.unsubscribe();
    }
}
TooltipDirective.ɵfac = function TooltipDirective_Factory(t) { return new (t || TooltipDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.ComponentLoaderFactory), ɵngcc0.ɵɵdirectiveInject(TooltipConfig), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.PositioningService)); };
TooltipDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: TooltipDirective, selectors: [["", "tooltip", ""], ["", "tooltipHtml", ""]], inputs: { containerClass: "containerClass", tooltipAnimation: "tooltipAnimation", tooltipFadeDuration: "tooltipFadeDuration", isOpen: "isOpen", htmlContent: ["tooltipHtml", "htmlContent"], tooltip: "tooltip", _placement: ["tooltipPlacement", "_placement"], placement: "placement", _isOpen: ["tooltipIsOpen", "_isOpen"], _enable: ["tooltipEnable", "_enable"], isDisabled: "isDisabled", _appendToBody: ["tooltipAppendToBody", "_appendToBody"], container: "container", _popupClass: ["tooltipClass", "_popupClass"], _tooltipContext: ["tooltipContext", "_tooltipContext"], _tooltipPopupDelay: ["tooltipPopupDelay", "_tooltipPopupDelay"], delay: "delay", _tooltipTrigger: ["tooltipTrigger", "_tooltipTrigger"], triggers: "triggers", adaptivePosition: "adaptivePosition" }, outputs: { tooltipChange: "tooltipChange", tooltipStateChanged: "tooltipStateChanged", onShown: "onShown", onHidden: "onHidden" }, exportAs: ["bs-tooltip"] });
/** @nocollapse */
TooltipDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: ComponentLoaderFactory },
    { type: TooltipConfig },
    { type: ElementRef },
    { type: Renderer2 },
    { type: PositioningService }
];
TooltipDirective.propDecorators = {
    adaptivePosition: [{ type: Input }],
    tooltip: [{ type: Input }],
    tooltipChange: [{ type: Output }],
    placement: [{ type: Input }],
    triggers: [{ type: Input }],
    container: [{ type: Input }],
    containerClass: [{ type: Input }],
    isOpen: [{ type: Input }],
    isDisabled: [{ type: Input }],
    delay: [{ type: Input }],
    onShown: [{ type: Output }],
    onHidden: [{ type: Output }],
    htmlContent: [{ type: Input, args: ['tooltipHtml',] }],
    _placement: [{ type: Input, args: ['tooltipPlacement',] }],
    _isOpen: [{ type: Input, args: ['tooltipIsOpen',] }],
    _enable: [{ type: Input, args: ['tooltipEnable',] }],
    _appendToBody: [{ type: Input, args: ['tooltipAppendToBody',] }],
    tooltipAnimation: [{ type: Input }],
    _popupClass: [{ type: Input, args: ['tooltipClass',] }],
    _tooltipContext: [{ type: Input, args: ['tooltipContext',] }],
    _tooltipPopupDelay: [{ type: Input, args: ['tooltipPopupDelay',] }],
    tooltipFadeDuration: [{ type: Input }],
    _tooltipTrigger: [{ type: Input, args: ['tooltipTrigger',] }],
    tooltipStateChanged: [{ type: Output }]
};
__decorate([
    OnChange(),
    __metadata("design:type", Object)
], TooltipDirective.prototype, "tooltip", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TooltipConfig, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TooltipContainerComponent, [{
        type: Component,
        args: [{
                selector: 'bs-tooltip-container',
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line
                host: {
                    '[class]': '"tooltip in tooltip-" + placement + " " + "bs-tooltip-" + placement + " " + placement + " " + containerClass',
                    '[class.show]': '!isBs3',
                    '[class.bs3]': 'isBs3',
                    '[attr.id]': 'this.id',
                    role: 'tooltip'
                },
                template: `
    <div class="tooltip-arrow arrow"></div>
    <div class="tooltip-inner"><ng-content></ng-content></div>
    `,
                styles: [`
    :host.tooltip {
      display: block;
      pointer-events: none;
    }
    :host.bs3.tooltip.top>.arrow {
      margin-left: -2px;
    }
    :host.bs3.tooltip.bottom {
      margin-top: 0px;
    }
    :host.bs3.bs-tooltip-left, :host.bs3.bs-tooltip-right{
      margin: 0px;
    }
    :host.bs3.bs-tooltip-right .arrow, :host.bs3.bs-tooltip-left .arrow {
      margin: .3rem 0;
    }
  `]
            }]
    }], function () { return [{ type: TooltipConfig }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TooltipDirective, [{
        type: Directive,
        args: [{
                selector: '[tooltip], [tooltipHtml]',
                exportAs: 'bs-tooltip'
            }]
    }], function () { return [{ type: ɵngcc0.ViewContainerRef }, { type: ɵngcc1.ComponentLoaderFactory }, { type: TooltipConfig }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc2.PositioningService }]; }, { tooltipChange: [{
            type: Output
        }], containerClass: [{
            type: Input
        }], tooltipAnimation: [{
            type: Input
        }], tooltipFadeDuration: [{
            type: Input
        }], tooltipStateChanged: [{
            type: Output
        }], onShown: [{
            type: Output
        }], onHidden: [{
            type: Output
        }], isOpen: [{
            type: Input
        }], htmlContent: [{
            type: Input,
            args: ['tooltipHtml']
        }], tooltip: [{
            type: Input
        }], _placement: [{
            type: Input,
            args: ['tooltipPlacement']
        }], placement: [{
            type: Input
        }], _isOpen: [{
            type: Input,
            args: ['tooltipIsOpen']
        }], _enable: [{
            type: Input,
            args: ['tooltipEnable']
        }], isDisabled: [{
            type: Input
        }], _appendToBody: [{
            type: Input,
            args: ['tooltipAppendToBody']
        }], container: [{
            type: Input
        }], _popupClass: [{
            type: Input,
            args: ['tooltipClass']
        }], _tooltipContext: [{
            type: Input,
            args: ['tooltipContext']
        }], _tooltipPopupDelay: [{
            type: Input,
            args: ['tooltipPopupDelay']
        }], delay: [{
            type: Input
        }], _tooltipTrigger: [{
            type: Input,
            args: ['tooltipTrigger']
        }], triggers: [{
            type: Input
        }], adaptivePosition: [{
            type: Input
        }] }); })();
if (false) {
    /** @type {?} */
    TooltipDirective.prototype.tooltipId;
    /**
     * sets disable adaptive position
     * @type {?}
     */
    TooltipDirective.prototype.adaptivePosition;
    /**
     * Content to be displayed as tooltip.
     * @type {?}
     */
    TooltipDirective.prototype.tooltip;
    /**
     * Fired when tooltip content changes
     * @type {?}
     */
    TooltipDirective.prototype.tooltipChange;
    /**
     * Placement of a tooltip. Accepts: "top", "bottom", "left", "right"
     * @type {?}
     */
    TooltipDirective.prototype.placement;
    /**
     * Specifies events that should trigger. Supports a space separated list of
     * event names.
     * @type {?}
     */
    TooltipDirective.prototype.triggers;
    /**
     * A selector specifying the element the tooltip should be appended to.
     * @type {?}
     */
    TooltipDirective.prototype.container;
    /**
     * Css class for tooltip container
     * @type {?}
     */
    TooltipDirective.prototype.containerClass;
    /**
     * Allows to disable tooltip
     * @type {?}
     */
    TooltipDirective.prototype.isDisabled;
    /**
     * Delay before showing the tooltip
     * @type {?}
     */
    TooltipDirective.prototype.delay;
    /**
     * Emits an event when the tooltip is shown
     * @type {?}
     */
    TooltipDirective.prototype.onShown;
    /**
     * Emits an event when the tooltip is hidden
     * @type {?}
     */
    TooltipDirective.prototype.onHidden;
    /**
     * @deprecated - removed, will be added to configuration
     * @type {?}
     */
    TooltipDirective.prototype.tooltipAnimation;
    /**
     * @deprecated
     * @type {?}
     */
    TooltipDirective.prototype.tooltipFadeDuration;
    /**
     * @deprecated
     * @type {?}
     */
    TooltipDirective.prototype.tooltipStateChanged;
    /**
     * @type {?}
     * @protected
     */
    TooltipDirective.prototype._delayTimeoutId;
    /**
     * @type {?}
     * @protected
     */
    TooltipDirective.prototype._tooltipCancelShowFn;
    /**
     * @type {?}
     * @private
     */
    TooltipDirective.prototype._tooltip;
    /**
     * @type {?}
     * @private
     */
    TooltipDirective.prototype._delaySubscription;
    /**
     * @type {?}
     * @private
     */
    TooltipDirective.prototype._ariaDescribedby;
    /**
     * @type {?}
     * @private
     */
    TooltipDirective.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    TooltipDirective.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    TooltipDirective.prototype._positionService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TooltipModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: TooltipModule,
            providers: [ComponentLoaderFactory, PositioningService]
        };
    }
}
TooltipModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TooltipModule });
TooltipModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TooltipModule_Factory(t) { return new (t || TooltipModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TooltipModule, { declarations: function () { return [TooltipDirective, TooltipContainerComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [TooltipDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TooltipModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [TooltipDirective, TooltipContainerComponent],
                exports: [TooltipDirective],
                entryComponents: [TooltipContainerComponent]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { TooltipConfig, TooltipContainerComponent, TooltipDirective, TooltipModule };

//# sourceMappingURL=ngx-bootstrap-tooltip.js.map