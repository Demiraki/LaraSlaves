import { EventEmitter, TemplateRef, OnInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs/tabset.component';
import * as ɵngcc0 from '@angular/core';
export declare class TabDirective implements OnInit, OnDestroy {
    elementRef: ElementRef;
    renderer: Renderer2;
    /** tab header text */
    heading: string;
    /** tab id. The same id with suffix '-link' will be added to the corresponding &lt;li&gt; element  */
    id: string;
    /** if true tab can not be activated */
    disabled: boolean;
    /** if true tab can be removable, additional button will appear */
    removable: boolean;
    /** if set, will be added to the tab's class attribute. Multiple classes are supported. */
    get customClass(): string;
    set customClass(customClass: string);
    /** tab active state toggle */
    get active(): boolean;
    set active(active: boolean);
    /** fired when tab became active, $event:Tab equals to selected instance of Tab component */
    selectTab: EventEmitter<TabDirective>;
    /** fired when tab became inactive, $event:Tab equals to deselected instance of Tab component */
    deselect: EventEmitter<TabDirective>;
    /** fired before tab will be removed, $event:Tab equals to instance of removed tab */
    removed: EventEmitter<TabDirective>;
    addClass: boolean;
    role: string;
    get ariaLabelledby(): string;
    headingRef: TemplateRef<any>;
    tabset: TabsetComponent;
    protected _active: boolean;
    protected _customClass: string;
    constructor(tabset: TabsetComponent, elementRef: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TabDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<TabDirective, "tab, [tab]", ["tab"], { "customClass": "customClass"; "active": "active"; "removable": "removable"; "heading": "heading"; "id": "id"; "disabled": "disabled"; }, { "selectTab": "selectTab"; "deselect": "deselect"; "removed": "removed"; }, never>;
}

//# sourceMappingURL=tab.directive.d.ts.map
