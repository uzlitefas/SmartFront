// ProfileForm.tsx
import { useState } from "react";

type ProfileType = "director" | "student" | "teacher" | "parent";

interface ProfileFormProps {
  type: ProfileType;
}

const roleConfig: Record<ProfileType, { label: string; badge: string }> = {
  director: { label: "Director", badge: "bg-primary text-primary-foreground" },
  teacher: { label: "Teacher", badge: "bg-accent text-accent-foreground" },
  student: {
    label: "Student",
    badge: "bg-secondary text-secondary-foreground",
  },
  parent: { label: "Parent", badge: "bg-muted text-muted-foreground" },
};

export default function ProfileForm({ type }: ProfileFormProps) {
  const role = roleConfig[type];
  const [edit, setEdit] = useState(false);

  const [form, setForm] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+998 90 000 00 00",
    about: "Short bio about the user",
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1 bg-card text-card-foreground border border-border rounded-2xl p-6 flex flex-col items-center text-center">
          <div className="w-28 h-28 rounded-full bg-muted flex items-center justify-center text-3xl font-bold text-foreground">
            {form.name.charAt(0)}
          </div>

          <h2 className="mt-4 text-xl font-semibold">{form.name}</h2>

          <span
            className={`mt-2 px-3 py-1 rounded-full text-xs font-medium ${role.badge}`}
          >
            {role.label}
          </span>

          <button
            onClick={() => setEdit((v) => !v)}
            className="mt-6 w-full px-4 py-2 rounded-xl border border-border bg-card hover:bg-muted transition"
          >
            {edit ? "Cancel" : "Edit profile"}
          </button>
        </div>

        <div className="md:col-span-2 bg-card text-card-foreground border border-border rounded-2xl p-6 space-y-6">
          <div>
            <label className="text-sm text-muted-foreground">Full name</label>
            <input
              disabled={!edit}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mt-1 w-full rounded-xl px-4 py-3 bg-background border border-input disabled:opacity-70"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-muted-foreground">Email</label>
              <input
                disabled={!edit}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1 w-full rounded-xl px-4 py-3 bg-background border border-input disabled:opacity-70"
              />
            </div>

            <div>
              <label className="text-sm text-muted-foreground">Phone</label>
              <input
                disabled={!edit}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="mt-1 w-full rounded-xl px-4 py-3 bg-background border border-input disabled:opacity-70"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-muted-foreground">About</label>
            <textarea
              disabled={!edit}
              rows={4}
              value={form.about}
              onChange={(e) => setForm({ ...form, about: e.target.value })}
              className="mt-1 w-full rounded-xl px-4 py-3 bg-background border border-input disabled:opacity-70"
            />
          </div>

          {edit && (
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setEdit(false)}
                className="px-5 py-2 rounded-xl border border-border bg-card"
              >
                Cancel
              </button>
              <button
                onClick={() => setEdit(false)}
                className="px-5 py-2 rounded-xl bg-primary text-primary-foreground"
              >
                Save
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
