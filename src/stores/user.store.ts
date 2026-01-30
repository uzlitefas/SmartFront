import { create } from "zustand";
import { api } from "@/service/api";
import { useAuth } from "./auth.store";

export interface User {
  userId: string;
  role: string;
  mustChangePassword: boolean;
  name?: string;
  email?: string;
  avatarUrl?: string;
}

export interface UserState {
  user: User | null;
  loading: boolean;

  setUser: (user: User) => void;
  getMe: () => Promise<User | null>;
  clearUser: () => void;
}

export const useUser = create<UserState>((set) => ({
  user: null,
  loading: false,

  getMe: async () => {
    set({ loading: true });
    try {
      const token = useAuth.getState().token;
      if (!token) throw new Error("User not authenticated");

      const { data } = await api.get<User>("/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      });

      set({ user: data });
      return data;
    } catch (err) {
      console.error("Get me error:", err);
      set({ user: null });
      return null;
    } finally {
      set({ loading: false });
    }
  },

  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null, loading: false }),
}));
