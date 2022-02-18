import { ChangeDetectorRef, ElementRef, OnDestroy, Renderer2, TemplateRef, EventEmitter } from '@angular/core';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { Subscription } from 'rxjs';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/typeahead-match.class';
import { TypeaheadDirective } from 'ngx-bootstrap/typeahead/typeahead.directive';
import { TypeaheadOptionItemContext, TypeaheadOptionListContext, TypeaheadTemplateMethods } from 'ngx-bootstrap/typeahead/models';
export declare class TypeaheadContainerComponent implements OnDestroy {
    private positionService;
    private renderer;
    element: ElementRef;
    private changeDetectorRef;
    activeChangeEvent: EventEmitter<any>;
    parent: TypeaheadDirective;
    query: string[] | string;
    isFocused: boolean;
    top: string;
    left: string;
    display: string;
    placement: string;
    dropup: boolean;
    guiHeight: string;
    needScrollbar: boolean;
    animationState: string;
    positionServiceSubscription: Subscription;
    height: number;
    popupId: string;
    get isBs4(): boolean;
    get typeaheadTemplateMethods(): TypeaheadTemplateMethods;
    protected _active: TypeaheadMatch;
    protected _matches: TypeaheadMatch[];
    private ulElement;
    private liElements;
    constructor(positionService: PositioningService, renderer: Renderer2, element: ElementRef, changeDetectorRef: ChangeDetectorRef);
    get active(): TypeaheadMatch;
    set active(active: TypeaheadMatch);
    get matches(): TypeaheadMatch[];
    set matches(value: TypeaheadMatch[]);
    get isTopPosition(): boolean;
    get optionsListTemplate(): TemplateRef<TypeaheadOptionListContext>;
    get isAnimated(): boolean;
    get adaptivePosition(): boolean;
    get typeaheadScrollable(): boolean;
    get typeaheadOptionsInScrollableView(): number;
    get typeaheadIsFirstItemActive(): boolean;
    get itemTemplate(): TemplateRef<TypeaheadOptionItemContext>;
    selectActiveMatch(isActiveItemChanged?: boolean): void;
    activeChanged(): void;
    prevActiveMatch(): void;
    nextActiveMatch(): void;
    selectActive(value: TypeaheadMatch): void;
    highlight(match: TypeaheadMatch, query: string[] | string): string;
    focusLost(): void;
    isActive(value: TypeaheadMatch): boolean;
    selectMatch(value: TypeaheadMatch, e?: Event): boolean;
    setScrollableMode(): void;
    scrollPrevious(index: number): void;
    scrollNext(index: number): void;
    ngOnDestroy(): void;
    private isScrolledIntoView;
    private scrollToBottom;
    private scrollToTop;
}
