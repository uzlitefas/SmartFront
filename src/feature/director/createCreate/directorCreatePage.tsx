import { useState } from "react";
import { useParams } from "react-router-dom";
import { directorApi } from "@/service/director.api";

export default function DirectorCreatePage() {
  const { "invite-token": inviteToken } = useParams<{
    "invite-token": string;
  }>();
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inviteToken) return setError("Invite token topilmadi");

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const data = await directorApi.acceptInvite(inviteToken, password, phone);
      setSuccess("Director account yaratildi! Id: " + data.userId);
    } catch (err: any) {
      console.error("Xatolik acceptInvite:", err.response?.data || err);
      setError(err.response?.data?.message || "Xatolik yuz berdi");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "2rem auto" }}>
      <h2>Director account yaratish</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Telefon raqam (misol: +998901234567)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Yangi parol"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Yaratilyapti..." : "Yaratish"}
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
}
