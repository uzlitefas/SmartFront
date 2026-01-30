import { create } from "zustand";
import { api } from "@/service/api";
import { useUser } from "./user.store";

export type UserRole =
  | "SUPER_ADMIN"
  | "ADMIN"
  | "DIRECTOR"
  | "TEACHER"
  | "STUDENT"
  | "PARENT";

export interface AuthResponse {
  accessToken: string;
  userId: string;
  role: UserRole;
  mustChangePassword: boolean;
}

export interface LoginPayload {
  phone: string;
  password: string;
}

export interface AcceptInvitePayload {
  inviteToken: string;
  phone: string;
  password: string;
}

export interface AuthState {
  token: string | null;
  userId: string | null;
  role: UserRole | null;
  mustChangePassword: boolean;
  loading: boolean;

  loginRequest: (payload: LoginPayload) => Promise<AuthResponse>;
  acceptDirectorInvite: (payload: AcceptInvitePayload) => Promise<AuthResponse>;
  changePassword: (
    current: string,
    newPassword: string,
  ) => Promise<{ success: boolean }>;
  logout: () => Promise<void>;

  setAuth: (data: AuthResponse) => void;
  clearAuth: () => void;
}

export const useAuth = create<AuthState>((set, get) => ({
  token: null,
  userId: null,
  role: null,
  mustChangePassword: false,
  loading: false,

  setAuth: (data) =>
    set({
      token: data.accessToken,
      userId: data.userId,
      role: data.role,
      mustChangePassword: data.mustChangePassword,
    }),

  clearAuth: () =>
    set({
      token: null,
      userId: null,
      role: null,
      mustChangePassword: false,
    }),

  loginRequest: async ({ phone, password }) => {
    set({ loading: true });
    try {
      const { data } = await api.post<AuthResponse>("/auth/login", {
        phone,
        password,
      });

      set({
        token: data.accessToken,
        userId: data.userId,
        role: data.role,
        mustChangePassword: data.mustChangePassword,
      });
      await useUser.getState().getMe();

      return data;
    } finally {
      set({ loading: false });
    }
  },

  acceptDirectorInvite: async ({ inviteToken, phone, password }) => {
    const { data } = await api.post<AuthResponse>(
      "/auth/director/accept-invite",
      {
        token: inviteToken,
        phone,
        password,
      },
    );

    set({
      token: data.accessToken,
      userId: data.userId,
      role: data.role,
      mustChangePassword: data.mustChangePassword,
    });
    await useUser.getState().getMe();

    return data;
  },

  changePassword: async (current, newPassword) => {
    try {
      const token = get().token;
      if (!token) throw new Error("User not authenticated");

      const { data } = await api.post<AuthResponse>(
        "/auth/change-password",
        { currentPassword: current, newPassword },
        { headers: { Authorization: `Bearer ${token}` } },
      );

      set({
        token: data.accessToken,
        mustChangePassword: data.mustChangePassword,
      });

      return { success: true };
    } catch (err) {
      console.error("Change password error:", err);
      return { success: false };
    }
  },

  logout: async () => {
    try {
      await api.post("/auth/logout");
    } finally {
      set({
        token: null,
        userId: null,
        role: null,
        mustChangePassword: false,
      });
    }
  },
}));
