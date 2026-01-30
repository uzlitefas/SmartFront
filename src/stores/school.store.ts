import { create } from "zustand";
import { api } from "@/service/api";
import { useAuth } from "./auth.store";

export interface School {
  id: string;
  name: string;
  slug: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ListSchoolsQuery {
  q?: string;
  isActive?: boolean;
  page?: number;
  limit?: number;
}

export interface ListSchoolsResponse {
  data: School[];
  total: number;
  page: number;
  limit: number;
}

export interface CreateSchoolPayload {
  name: string;
  slug: string;
}

export interface CreateSchoolResponse {
  inviteToken: string;
}

export interface SchoolState {
  fetchSchools: (query?: ListSchoolsQuery) => Promise<ListSchoolsResponse>;
  fetchSchoolById: (id: string) => Promise<School>;
  createSchool: (data: CreateSchoolPayload) => Promise<CreateSchoolResponse>;
}
export const useSchool = create<SchoolState>(() => ({
  fetchSchools: async (query) => {
    try {
      const res = await api.get<ListSchoolsResponse>("/admin/schools", {
        params: query,
      });
      return res.data;
    } catch (err: any) {
      console.error("Xatolik fetchSchools:", err.response?.data || err);
      throw new Error(
        err.response?.data?.message || "Maktablarni olishda xatolik",
      );
    }
  },

  fetchSchoolById: async (id: string) => {
    try {
      const res = await api.get<School>(`/admin/schools/${id}`);
      return res.data;
    } catch (err: any) {
      console.error("Xatolik fetchSchoolById:", err.response?.data || err);
      throw new Error(
        err.response?.data?.message || "Maktabni olishda xatolik",
      );
    }
  },

  createSchool: async (data) => {
    const token = useAuth.getState().token;
    if (!token) throw new Error("Siz login qilmagansiz");

    try {
      const res = await api.post<CreateSchoolResponse>("/admin/schools", data, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.data?.inviteToken) {
        throw new Error("Server inviteToken qaytarmadi");
      }

      return res.data;
    } catch (err: any) {
      console.error("Xatolik createSchool:", err.response?.data || err);

      if (err.response?.status === 401) {
        throw new Error(
          "Sizning sessiyangiz muddati tugagan yoki login qilmagansiz",
        );
      }

      throw new Error(
        err.response?.data?.message || "Maktab yaratishda xatolik",
      );
    }
  },
}));
