import { cn } from "@/lib/utils";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { loginformSchema } from "@/lib/validation";
import { motion } from "framer-motion";
import { useState } from "react";
import { useAuth } from "@/stores/auth.store";
import { useNavigate } from "react-router-dom";

type LoginFormValues = z.infer<typeof loginformSchema>;

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const { loginRequest } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const nav = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginformSchema),
    defaultValues: {
      number: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    setLoading(true);
    setError(null);

    try {
      const res = await loginRequest(data.number, data.password);

      switch (res.role) {
        case "SUPER_ADMIN":
          nav("/admin");
          break;
        case "DIRECTOR":
          nav("/director");
          break;
        case "TEACHER":
          nav("/teacher");
          break;
        case "STUDENT":
          nav("/student");
          break;
        case "PARENT":
          nav("/parent");
          break;
        default:
          nav("/login");
      }
    } catch (err: any) {
      setError(
        err.response?.data?.message ||
          "Login muvaffaqiyatsiz, qayta urinib ko‘ring",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35 }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn("flex flex-col gap-6", className)}
        {...props}
      >
        <FieldGroup>
          <div className="flex flex-col items-center gap-1 text-center">
            <h1 className="text-2xl font-bold text-primary">
              Hisobingizga kiring
            </h1>
            <p className="text-muted-foreground text-sm">
              Telefon raqamingiz va parolingizni kiriting
            </p>
          </div>

          <Field>
            <FieldLabel htmlFor="number" className="text-primary">
              Telefon raqam
            </FieldLabel>
            <Input
              id="number"
              type="tel"
              placeholder="+998901234567"
              {...register("number")}
              disabled={loading}
            />
            {errors.number && (
              <p className="text-sm text-destructive">
                {errors.number.message}
              </p>
            )}
          </Field>

          <Field>
            <div className="flex items-center">
              <FieldLabel htmlFor="password" className="text-primary">
                Parol
              </FieldLabel>
              <a
                href="#"
                className="ml-auto text-sm text-muted-foreground hover:underline"
              >
                Parolni unutdingizmi?
              </a>
            </div>
            <Input
              id="password"
              type="password"
              {...register("password")}
              disabled={loading}
            />
            {errors.password && (
              <p className="text-sm text-destructive">
                {errors.password.message}
              </p>
            )}
          </Field>

          {error && (
            <p className="text-sm text-center text-destructive">{error}</p>
          )}

          <Field>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Kirish..." : "Kirish"}
              </Button>
            </motion.div>
          </Field>

          <FieldSeparator>Yoki</FieldSeparator>

          <Field>
            <motion.div whileHover={{ y: -2 }}>
              <Button variant="outline" type="button" className="w-full">
                Ilova bilan kirish
              </Button>
            </motion.div>

            <FieldDescription className="text-center">
              Akkountingiz yo‘qmi?
            </FieldDescription>
          </Field>
        </FieldGroup>
      </form>
    </motion.div>
  );
}
