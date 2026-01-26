import axios from "axios";

export const authApi = {
  login: async ({ phone, password }: { phone: string; password: string }) => {
    try {
      const res = await axios.post("/api/auth/login", { phone, password });
      return res.data;
    } catch (err: any) {
      console.error("Login xatolik tafsilotlari:", err);
      throw err;
    }
  },
};
