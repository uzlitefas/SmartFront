import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { teacherAddSchema } from "@/lib/validation";

type TeacherForm = z.infer<typeof teacherAddSchema>;

export default function DirectorCreateTeacher() {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TeacherForm>({
    resolver: zodResolver(teacherAddSchema),
  });

  const onSubmit = (data: TeacherForm) => {
    console.log(data);
    reset();
    setOpen(false);
  };

  return (
    <>
      {/* Button */}
      <button
        style={{
          backgroundColor: "var(--primary)",
          color: "var(--primary-foreground)",
        }}
        className="px-3 py-2 font-medium rounded hover:opacity-90 transition"
        onClick={() => setOpen(true)}
      >
        Yangi o‘qituvchi qo‘shish
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40"
            style={{ backgroundColor: "black" }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Side Sheet */}
      <AnimatePresence>
        {open && (
          <motion.aside
            key="sheet"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-full max-w-md h-full z-50 p-6 flex flex-col shadow-xl"
            style={{
              backgroundColor: "var(--card)",
              color: "var(--card-foreground)",
            }}
          >
            {/* Header */}
            <div className="flex flex-col gap-2">
              <h2
                className="text-xl font-semibold"
                style={{ color: "var(--foreground)" }}
              >
                Yangi o‘qituvchi qo‘shish
              </h2>
              <p
                className="text-sm"
                style={{ color: "var(--muted-foreground)" }}
              >
                Telefon raqam va parol orqali o‘qituvchi yarating
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-6 flex flex-col gap-4 flex-1"
            >
              <label className="flex flex-col gap-1 text-sm">
                Telefon raqam
                <input
                  type="tel"
                  placeholder="+998901234567"
                  {...register("phone")}
                  style={{
                    borderColor: errors.phone
                      ? "var(--destructive)"
                      : "var(--input)",
                    backgroundColor: "var(--card)",
                    color: "var(--card-foreground)",
                    borderRadius: "var(--radius)",
                  }}
                  className="w-full p-3 border"
                />
                {errors.phone && (
                  <span
                    className="text-xs"
                    style={{ color: "var(--destructive)" }}
                  >
                    {errors.phone.message}
                  </span>
                )}
              </label>

              <label className="flex flex-col gap-1 text-sm">
                Parol
                <input
                  type="password"
                  placeholder="Kamida 8 ta belgi"
                  {...register("password")}
                  style={{
                    borderColor: errors.password
                      ? "var(--destructive)"
                      : "var(--input)",
                    backgroundColor: "var(--card)",
                    color: "var(--card-foreground)",
                    borderRadius: "var(--radius)",
                  }}
                  className="w-full p-3 border"
                />
                {errors.password && (
                  <span
                    className="text-xs"
                    style={{ color: "var(--destructive)" }}
                  >
                    {errors.password.message}
                  </span>
                )}
              </label>

              <button
                type="submit"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "var(--accent-foreground)",
                }}
                className="mt-auto px-4 py-3 rounded hover:opacity-90 transition"
              >
                Yaratish
              </button>
            </form>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
