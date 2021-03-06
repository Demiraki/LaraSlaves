import { AccordionPanelComponent } from 'ngx-bootstrap/accordion/accordion-group.component';
import { AccordionConfig } from 'ngx-bootstrap/accordion/accordion.config';
/** Displays collapsible content panels for presenting information in a limited amount of space. */
export declare class AccordionComponent {
    /** turn on/off animation */
    isAnimated: boolean;
    /** if `true` expanding one item will close all others */
    closeOthers: boolean;
    protected groups: AccordionPanelComponent[];
    constructor(config: AccordionConfig);
    closeOtherPanels(openGroup: AccordionPanelComponent): void;
    addGroup(group: AccordionPanelComponent): void;
    removeGroup(group: AccordionPanelComponent): void;
}
