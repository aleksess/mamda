export interface INothing {
  unit: () => INothing;
  bind: (f: (x: any) => any) => INothing;
  typeof: () => string;
  error: any;
  pipe: (...functions: Array<((x: any) => any )>) => INothing;
}

export const Nothing = (err?: any): INothing => ({
  unit: () => Nothing(err),
  bind: f => Nothing(err),
  typeof: () => 'Nothing',
  error: err,
  pipe: (...functions) => Nothing(err)
})