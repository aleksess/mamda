import { MonadInput } from "./monadInput";

export interface IJust<T> {
  unit: () => T;
  typeof: () => string;
  map: (f: (x: T) => any) => IJust<any>;
  bind: (f: (x: T) => any) => any;
  pipe: (...functions: Array<((x: T) => any )>) => IJust<any>;
}

export const Just = (x: MonadInput): IJust<MonadInput> => ({
  unit: () => x,
  typeof: () => `Just<${typeof x}>`,
  bind: (f: (x: any) => any) => f(x),
  map: (f: (x: any) => any) => Just(f(x)),
  pipe: (...functions) => Just(functions.reduce((prev, current) => current(prev), x))
})