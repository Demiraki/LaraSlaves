/**
 * @copyright ngrx
 */
import { Action, ActionReducer } from 'ngx-bootstrap/mini-ngrx/index';
import { BehaviorSubject, Observable } from 'rxjs';
export declare class MiniState<T> extends BehaviorSubject<T> {
    constructor(_initialState: T, actionsDispatcher$: Observable<Action>, reducer: ActionReducer<T>);
}
