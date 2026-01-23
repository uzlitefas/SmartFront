import * as z from "zod";

export const loginformSchema = z.object({
  number: z
    .string()
    .trim()
    .regex(/^\+?\d{9,20}$/, "Telefon raqam noto‘g‘ri formatda")
    .min(9, "Telefon raqam 9 tadan ko‘p bo‘lsin")
    .max(20, "Telefon raqam 20 tadan kam bo‘lsin"),

  password: z.string().min(8, "Parol kamida 8 ta belgidan iborat bo‘lsin"),
});
