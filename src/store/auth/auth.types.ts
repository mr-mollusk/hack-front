export interface User {
    id: number;
    email: string;
    name: string;
    isAuth: boolean;
  }
  
  export interface AuthState {
    user: User;
    loading: boolean;
    error: unknown;
  }