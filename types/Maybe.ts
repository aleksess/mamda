import { IJust } from "./just";
import { INothing } from "./Nothing";

export type Maybe<T> = IJust<T> | INothing;