import { create } from "zustand";

interface AuthState {
  token: string | null;
  userId: string | null;
  role: string | null;
  mustChangePassword: boolean;
  login: (token: string, userId: string, role: string, mustChangePassword: boolean) => void;
  logout: () => void;
}

export const useAuth = create<AuthState>((set) => ({
  token: null,
  userId: null,
  role: null,
  mustChangePassword: false,

  login: (token, userId, role, mustChangePassword) =>
    set({ token, userId, role, mustChangePassword }),

  logout: () =>
    set({ token: null, userId: null, role: null, mustChangePassword: false }),
}));
