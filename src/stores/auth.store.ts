import { create } from "zustand";
import { api } from "@/service/api";

interface AuthState {
  token: string | null;
  userId: string | null;
  role: string | null;
  mustChangePassword: boolean;
  loading: boolean;

  loginRequest: (phone: string, password: string) => Promise<any>;
  login: (
    token: string,
    userId: string,
    role: string,
    mustChangePassword: boolean,
  ) => void;
  logout: () => void;
}

export const useAuth = create<AuthState>((set) => ({
  token: null,
  userId: null,
  role: null,
  mustChangePassword: false,
  loading: false,

  login: (token, userId, role, mustChangePassword) =>
    set({ token, userId, role, mustChangePassword }),

  logout: () =>
    set({
      token: null,
      userId: null,
      role: null,
      mustChangePassword: false,
    }),

  loginRequest: async (phone, password) => {
    set({ loading: true });
    try {
      const { data } = await api.post("/auth/login", { phone, password });

      set({
        token: data.accessToken,
        userId: data.userId,
        role: data.role,
        mustChangePassword: data.mustChangePassword,
      });

      return data;
    } finally {
      set({ loading: false });
    }
  },
}));
