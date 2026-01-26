import { create } from "zustand";
import { api } from "@/service/api";

interface SchoolState {
  fetchSchools: (query?: any) => Promise<any>;
  createSchool: (data: {
    name: string;
    slug: string;
  }) => Promise<{ inviteToken: string }>;
}

export const useSchool = create<SchoolState>(() => ({
  fetchSchools: async (query) => {
    try {
      const res = await api.get("/admin/schools", { params: query });
      return res.data;
    } catch (err: any) {
      console.error("Xatolik fetchSchools:", err.response?.data || err);
      throw new Error(
        err.response?.data?.message || "Maktablarni olishda xatolik",
      );
    }
  },

  createSchool: async (data) => {
    try {
      const res = await api.post("/admin/schools", data);
      if (!res.data?.inviteToken) {
        throw new Error("Server inviteToken qaytarmadi");
      }
      return res.data;
    } catch (err: any) {
      console.error("Xatolik createSchool:", err.response?.data || err);
      throw new Error(
        err.response?.data?.message || "Maktab yaratishda xatolik",
      );
    }
  },
}));
