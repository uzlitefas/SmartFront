import { useAuth } from "@/stores/auth.store";
import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3001/api",
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = useAuth.getState().token;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

let isRefreshing = false;
let waiters: Array<() => void> = [];

api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const original = err.config;
    if (err.response?.status === 401 && !original._retry) {
      if (isRefreshing) {
        await new Promise<void>((resolve) => waiters.push(resolve));
        original.headers.Authorization = `Bearer ${useAuth.getState().token}`;
        original._retry = true;
        return api(original);
      }

      try {
        isRefreshing = true;
        original._retry = true;

        const { data } = await api.post("/auth/refresh");
        if (data?.accessToken) {
          useAuth
            .getState()
            .login(
              data.accessToken,
              data.userId,
              data.role,
              data.mustChangePassword,
            );

          waiters.forEach((fn) => fn());
          waiters = [];

          original.headers.Authorization = `Bearer ${data.accessToken}`;
          return api(original);
        }
      } catch (e) {
        useAuth.getState().logout();
        throw e;
      } finally {
        isRefreshing = false;
      }
    }
    throw err;
  },
);
