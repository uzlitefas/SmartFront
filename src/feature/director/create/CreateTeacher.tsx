"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function CreateTeacher() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState<{
    phone?: string;
    password?: string;
  }>({});

  const validate = () => {
    const newErrors: typeof errors = {};

    if (!phone.trim()) {
      newErrors.phone = "Telefon raqam majburiy";
    } else if (!phone.startsWith("+998")) {
      newErrors.phone = "Telefon +998 bilan boshlanishi kerak";
    } else if (phone.replace(/\D/g, "").length < 12) {
      newErrors.phone = "Telefon raqam to‘liq emas";
    }

    if (!password.trim()) {
      newErrors.password = "Parol majburiy";
    } else if (password.length < 8) {
      newErrors.password = "Parol kamida 8 ta belgidan iborat bo‘lishi kerak";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    console.log({ phone, password });
    setOpen(false); // ✅ muvaffaqiyatli bo‘lsa yopiladi
  };

  return (
    <>
      <button className="nav-trigger" onClick={() => setOpen(true)}>
        Yangi o‘qituvchi qo‘shish
      </button>

      {open && <div className="sheet-overlay" onClick={() => setOpen(false)} />}

      <aside className={`sheet ${open ? "open" : ""}`}>
        <div className="sheet-header">
          <h2 className="title">Yangi o‘qituvchi qo‘shish</h2>
          <p className="description">
            Telefon raqam va parol orqali o‘qituvchi yarating
          </p>
        </div>

        <form onSubmit={submit} className="sheet-form">
          <label>
            Telefon raqam
            <input
              type="tel"
              placeholder="+998 90 123 45 67"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                setErrors((p) => ({ ...p, phone: undefined }));
              }}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </label>

          <label>
            Parol
            <input
              type="password"
              placeholder="Kamida 8 ta belgi"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors((p) => ({ ...p, password: undefined }));
              }}
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </label>

          <button className="primary" type="submit">
            Yaratish
          </button>
        </form>
      </aside>

      <style>{`
        .nav-trigger {
          background: transparent;
          border: none;
          color: var(--foreground);
          font-weight: 500;
          cursor: pointer;
          padding: 8px 12px;
        }

        .sheet-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.45);
          z-index: 40;
        }

        .sheet {
          position: fixed;
          top: 0;
          right: -100%;
          width: 100%;
          max-width: 360px;
          height: 100%;
          background: var(--card);
          color: var(--foreground);
          border-left: 1px solid var(--border);
          transition: right 0.3s ease;
          z-index: 50;
          padding: 20px;
          display: flex;
          flex-direction: column;
        }

        .sheet.open {
          right: 0;
        }

        .sheet-header {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .title {
          font-size: 20px;
          font-weight: 600;
        }

        .description {
          font-size: 14px;
          color: var(--muted-foreground);
        }

        .sheet-form {
          margin-top: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          flex: 1;
        }

        .sheet-form label {
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-size: 14px;
        }

        .sheet-form input {
          width: 100%;
          padding: 12px;
          border-radius: var(--radius);
          border: 1px solid var(--input);
          background: var(--background);
          color: var(--foreground);
        }

        .error {
          font-size: 12px;
          color: #ef4444;
        }

        .primary {
          margin-top: auto;
          background: var(--primary);
          color: var(--primary-foreground);
          padding: 12px;
          border-radius: var(--radius);
          border: none;
          cursor: pointer;
          font-size: 15px;
          font-weight: 500;
        }

        @media (max-width: 480px) {
          .sheet {
            max-width: 100%;
            padding: 16px;
          }
        }
      `}</style>
    </>
  );
}
