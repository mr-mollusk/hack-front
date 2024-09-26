export interface Todo {
   id: number;
   title: string;
   description: string;
   done: boolean;
}

export interface MockState {
   todoes: Todo[];
   loading: boolean;
   error: unknown;
}
