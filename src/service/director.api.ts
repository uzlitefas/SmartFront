import { api } from "@/service/api";

export const directorApi = {
  acceptInvite: async (token: string, password: string, phone: string) => {
    try {
      const res = await api.post("/auth/director/accept-invite", {
        token,
        password,
        phone,
      });
      console.log("Director created:", res.data);
      return res.data;
    } catch (err: any) {
      console.error("Xatolik acceptInvite:", err.response?.data || err);
      throw err;
    }
  },
};
