import { create } from "zustand";
import { api } from "@/service/api";

interface DirectorState {
  acceptInvite: (
    token: string,
    password: string,
    phone: string,
  ) => Promise<any>;
}

export const useDirector = create<DirectorState>(() => ({
  acceptInvite: async (token, password, phone) => {
    const { data } = await api.post("/auth/director/accept-invite", {
      token,
      password,
      phone,
    });
    return data;
  },
}));
