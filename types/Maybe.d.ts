import { IJust } from "./just";
import { INothing } from "./Nothing";
export declare type Maybe<T> = IJust<T> | INothing;
