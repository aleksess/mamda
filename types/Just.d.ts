import { MonadInput } from "./monadInput";
export interface IJust<T> {
    unit: () => T;
    typeof: () => string;
    map: (f: (x: T) => any) => IJust<any>;
    bind: (f: (x: T) => any) => any;
    pipe: (...functions: Array<((x: T) => any)>) => IJust<any>;
}
export declare const Just: (x: MonadInput) => IJust<MonadInput>;
