import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      style={{
        backgroundImage: "url('https://i.redd.it/vkow06xz617a1.jpg')",
      }}
      className="flex items-center justify-center bg-fixed top-1 z-10 bg-cover min-h-160 py-5 bg-bottom"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-card border border-border rounded-2xl max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-8 text-center md:text-left">
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-primary">
                <GraduationCap className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                Online Maktab
              </h3>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground max-w-xs">
              {t("footer.aboutText")}
            </p>
            <div className="flex gap-3 pt-2">
              {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <button
                  key={i}
                  className="p-2 rounded-lg bg-accent transition-all hover:scale-110 hover:shadow-lg"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent-foreground" />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold text-base sm:text-lg mb-4 text-foreground">
              {t("footer.about")}
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {["aboutUs", "teachers", "courses", "results", "news"].map(
                (k) => (
                  <li key={k}>
                    <Link
                      to="/"
                      className="text-xs sm:text-sm text-muted-foreground hover:underline"
                    >
                      {t(`links.${k}`)}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold text-base sm:text-lg mb-4 text-foreground">
              {t("footer.useful")}
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {["guide", "faq", "support", "privacy", "terms"].map((k) => (
                <li key={k}>
                  <Link
                    to="/"
                    className="text-xs sm:text-sm text-muted-foreground hover:underline"
                  >
                    {t(`links.${k}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold text-base sm:text-lg mb-4 text-foreground">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <div className="p-2 rounded-lg bg-accent">
                  <Phone className="w-4 h-4 text-accent-foreground" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">
                    {t("footer.phone")}
                  </p>
                  <a
                    href="tel:+998901234567"
                    className="text-sm font-semibold text-foreground hover:underline"
                  >
                    +998 (90) 123-45-67
                  </a>
                </div>
              </li>

              <li className="flex gap-3 items-start">
                <div className="p-2 rounded-lg bg-accent">
                  <Mail className="w-4 h-4 text-accent-foreground" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">
                    {t("footer.email")}
                  </p>
                  <a
                    href="mailto:info@onlinemaktab.uz"
                    className="text-sm font-semibold text-foreground hover:underline"
                  >
                    info@onlinemaktab.uz
                  </a>
                </div>
              </li>

              <li className="flex gap-3 items-start">
                <div className="p-2 rounded-lg bg-accent">
                  <MapPin className="w-4 h-4 text-accent-foreground" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">
                    {t("footer.address")}
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    {t("footer.addressText")}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <p className="text-xs sm:text-sm text-muted-foreground">
              {t("footer.rights")}
            </p>
            <div className="flex gap-4 sm:gap-6">
              {["privacy", "terms", "cookies"].map((k) => (
                <Link
                  key={k}
                  to="/"
                  className="text-xs sm:text-sm text-muted-foreground hover:underline"
                >
                  {t(`links.${k}`)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
