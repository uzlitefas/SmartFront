import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stats = [
  { value: "1200+", label: "O‘quvchilar" },
  { value: "85+", label: "O‘qituvchilar" },
  { value: "50+", label: "Sinf xonalari" },
  { value: "100%", label: "Natija" },
];

const leadership = [
  "Direktor",
  "O‘quv ishlari bo‘yicha direktor o‘rinbosari",
  "Ma’naviy-ma’rifiy ishlar bo‘yicha direktor o‘rinbosari",
];

const About = () => {
  return (
    <div className="py-14 px-4 md:px-10 mt-11 bg-[#F8FAFC] dark:bg-[#0F172A] transition-colors">
      {/* About school */}
      <section className="max-w-6xl mx-auto mb-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl font-bold mb-4 text-[#2563EB] dark:text-white">
            Bizning maktabimiz
          </h1>

          <p className="mb-4 text-lg text-slate-700 dark:text-slate-300">
            Maktabimiz o‘quvchilarga sifatli ta’lim berish va ularning
            bilimlarini rivojlantirishni asosiy maqsad qilib olgan.
          </p>

          <p className="text-slate-600 dark:text-slate-400">
            Tajribali ustozlar, zamonaviy o‘quv dasturlari va qulay muhit orqali
            har bir o‘quvchining salohiyatini ochishga harakat qilamiz.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5MBZkdaGFOl6V3Zb15q8MRX_tbiafCSyQNw&s"
            alt="Maktab"
            className="rounded-2xl shadow-xl max-w-sm border border-[#E2E8F0] dark:border-slate-700"
          />
        </motion.div>
      </section>

      {/* Statistics */}
      <section className="max-w-6xl mx-auto mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white dark:bg-[#020617]
                         border border-[#E2E8F0] dark:border-slate-700
                         shadow-md hover:shadow-xl hover:-translate-y-1
                         transition-all"
            >
              <p className="text-4xl font-bold text-[#16A34A]">{item.value}</p>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold mb-12 text-[#2563EB] dark:text-white"
        >
          Maktab rahbariyati
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {leadership.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-white dark:bg-[#020617]
                         border border-[#E2E8F0] dark:border-slate-700
                         shadow-md hover:shadow-xl
                         hover:border-[#F97316]
                         transition"
            >
              <p className="text-lg font-medium text-slate-800 dark:text-slate-200">
                {role}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
