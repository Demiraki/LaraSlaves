import { SlideComponent } from 'ngx-bootstrap/carousel/slide.component';
export interface SlideWithIndex {
    item: SlideComponent;
    index: number;
}
export interface IndexedSlideList {
    list: SlideWithIndex[];
    index: number;
}
