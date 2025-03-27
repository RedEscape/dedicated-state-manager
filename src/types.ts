export type TAppState = {
  count: number
  name: string
};

export type Action = { type: string; payload: any };
export type Store = any;
export type Reducer = (action: Action, store: Store) => Store;
