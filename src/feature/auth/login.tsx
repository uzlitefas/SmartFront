import { ArrowBigLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/hooks/hooks";
import { LoginForm } from "./loginform";
import { motion } from "framer-motion";

export default function LoginPage() {
  const { theme } = useTheme();

  return (
    <motion.div
      className="grid min-h-svh lg:grid-cols-2 overflow-clip"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Link to="/" className="flex items-center gap-2 font-medium">
            <motion.div
              className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md"
              whileHover={{ x: -4 }}
            >
              <ArrowBigLeft className="size-4" />
            </motion.div>
            Orqaga
          </Link>
        </motion.div>

        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>

      <motion.div
        className="bg-muted relative hidden lg:block"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <img
          src={
            theme === "dark"
              ? "https://img.freepik.com/free-photo/view-starry-night-sky-with-nature-mountains-landscape_23-2151614765.jpg"
              : "https://i.redd.it/vkow06xz617a1.jpg"
          }
          alt="Login background"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </motion.div>
    </motion.div>
  );
}
