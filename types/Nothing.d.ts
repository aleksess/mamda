export interface INothing {
    unit: () => INothing;
    bind: (f: (x: any) => any) => INothing;
    typeof: () => string;
    error: () => any;
    pipe: (...functions: Array<((x: any) => any)>) => INothing;
}
export declare const Nothing: (err?: any) => INothing;
