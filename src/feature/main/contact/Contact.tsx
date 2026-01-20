import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaHotel, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3001/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        alert(t("messageSentSuccess"));
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert(t("messageSentError"));
      }
    } catch {
      alert(t("networkError"));
    }
  };

  return (
    <main className="container mx-auto px-6 pt-24 pb-14 min-h-screen">
      {/* Navbar height: umumiy 64-80px. Sizning navbar height'ingizga qarab pt-24 yoki pt-20 qo'ying */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* IMAGE - Kattalashtirilgan va yaxshilangan */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative group overflow-hidden rounded-2xl shadow-2xl"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5MBZkdaGFOl6V3Zb15q8MRX_tbiafCSyQNw&s"
            alt={t("schoolLogoAlt")}
            className="w-full h-[500px] object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
        </motion.div>

        {/* FORM */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 lg:p-10"
        >
          <h1 className="text-3xl font-bold mb-3 text-[#1b4571] dark:text-white">
            {t("ourContacts")}
          </h1>

          <p className="text-gray-600 dark:text-gray-400 mb-8">
            {t("contactFormDescription")}
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {[
              {
                label: t("nameLabel"),
                value: name,
                onChange: setName,
                placeholder: t("namePlaceholder"),
                type: "text",
              },
              {
                label: t("emailLabel"),
                value: email,
                onChange: setEmail,
                placeholder: t("emailPlaceholder"),
                type: "email",
              },
            ].map((field, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: i * 0.1 }}
                className="flex flex-col"
              >
                <label className="mb-2 font-semibold text-gray-700 dark:text-gray-300">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                  placeholder={field.placeholder}
                  required
                  className="rounded-xl border border-gray-300 dark:border-gray-700 px-4 py-3 focus:ring-3 focus:ring-[#1b4571]/20 focus:border-[#1b4571] dark:bg-slate-800 dark:text-white transition-all"
                />
              </motion.div>
            ))}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className="flex flex-col"
            >
              <label className="mb-1 font-semibold">{t("messageLabel")}</label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t("messagePlaceholder")}
                required
                className="rounded-md border px-3 py-2 focus:ring-2 focus:ring-[#1b4571] dark:bg-slate-800"
              />
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              <Button className="w-full bg-[#1b4571] hover:bg-[#16385c] text-white py-6 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
                {t("submitButton")}
              </Button>
            </motion.div>
          </form>
        </motion.section>
      </div>

      {/* CONTACT INFO */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 bg-gradient-to-r from-[#1b4571] to-[#16385c] text-white rounded-2xl p-10 lg:p-12 shadow-2xl"
      >
        {[
          { icon: <FaHotel />, title: "addressTitle", text: "addressText" },
          { icon: <FaPhoneAlt />, title: "phoneTitle", text: "phoneNumber" },
          { icon: <MdEmail />, title: "emailTitle", text: "emailAddress" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{
              scale: 1.05,
              y: -10,
              transition: { duration: 0.2 },
            }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center gap-4 p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
          >
            <div className="text-5xl p-4 rounded-full bg-white/10">
              {item.icon}
            </div>
            <h3 className="font-bold text-xl">{t(item.title)}</h3>
            <p className="text-white/90 text-lg">{t(item.text)}</p>
          </motion.div>
        ))}
      </motion.section>
    </main>
  );
};

export default Contact;
