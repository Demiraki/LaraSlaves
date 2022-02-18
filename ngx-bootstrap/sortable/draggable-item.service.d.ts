import { Subject } from 'rxjs';
import { DraggableItem } from 'ngx-bootstrap/sortable/draggable-item';
export declare class DraggableItemService {
    private draggableItem;
    private onCapture;
    dragStart(item: DraggableItem): void;
    getItem(): DraggableItem;
    captureItem(overZoneIndex: number, newIndex: number): DraggableItem;
    onCaptureItem(): Subject<DraggableItem>;
}
