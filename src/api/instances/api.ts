import axios from 'axios';

const BASE_URL = 'http://localhost:5173/mock';

export const apiInstance = axios.create({ baseURL: BASE_URL });
