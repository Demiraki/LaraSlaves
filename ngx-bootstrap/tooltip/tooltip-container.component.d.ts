import { AfterViewInit } from '@angular/core';
import { TooltipConfig } from 'ngx-bootstrap/tooltip/tooltip.config';
import * as ɵngcc0 from '@angular/core';
export declare class TooltipContainerComponent implements AfterViewInit {
    classMap: {
        [key: string]: boolean;
    };
    placement: string;
    containerClass: string;
    animation: boolean;
    id: string;
    get isBs3(): boolean;
    constructor(config: TooltipConfig);
    ngAfterViewInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TooltipContainerComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TooltipContainerComponent, "bs-tooltip-container", never, {}, {}, never, ["*"]>;
}

//# sourceMappingURL=tooltip-container.component.d.ts.map
