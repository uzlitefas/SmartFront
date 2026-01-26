import axios from "axios";
import { useAuth } from "@/stores/auth.store";

const api = axios.create({
  baseURL: "/api",
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
      original._retry = true;
      if (isRefreshing) {
        await new Promise<void>((resolve) => waiters.push(resolve));
        original.headers.Authorization = `Bearer ${useAuth.getState().token}`;
        return api(original);
      }

      try {
        isRefreshing = true;
        const { data } = await axios.post(
          "/api/auth/refresh",
          {},
          { withCredentials: true },
        );

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

export const schoolsApi = {
  fetchSchools: async (query?: {
    q?: string;
    isActive?: boolean;
    page?: number;
    limit?: number;
  }) => {
    const res = await api.get("/admin/schools", { params: query });
    return res.data;
  },

  createSchool: async (data: { name: string; slug: string }) => {
    const res = await api.post("/admin/schools", data);
    console.log("Backend response:", res.data);
    return res.data;
  },
};
