import { apiInstance } from "../instances/api";

export const authApi = {
    login: (email: string, password: string) => apiInstance.post('api/v1/auth/login', { email, password }),
    register: (email: string, password: string) => apiInstance.post('api/v1/auth/register', { email, password }),
    me: () => apiInstance.get('api/v1/auth/me'),
}