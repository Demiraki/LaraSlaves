export interface Action {
    type: string;
    payload?: any;
}
export declare type ActionReducer<T> = (state: T, action: Action) => T;
export { MiniState } from 'ngx-bootstrap/mini-ngrx/state.class';
export { MiniStore } from 'ngx-bootstrap/mini-ngrx/store.class';
