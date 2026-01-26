import { useState } from "react";
import { schoolsApi } from "@/service/schools.api";

export default function CreateSchoolForm() {
  const [name, setName] = useState("Toshkent IT maktabi");
  const [slug, setSlug] = useState("toshkent-it-maktabi");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [inviteToken, setInviteToken] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setInviteToken(null);

    try {
      const data = await schoolsApi.createSchool({ name, slug });
      setInviteToken(data.inviteToken);
    } catch (err: any) {
      console.error("Xatolik createSchool:", err.response?.data || err);
      setError(err.response?.data?.message || "Maktab yaratishda xatolik");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "2rem auto" }}>
      <h2>Maktab yaratish</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Maktab nomi"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Slug (unique, kichik harf va -)"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Yaratilyapti..." : "Maktab yaratish"}
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {inviteToken && (
        <div
          style={{
            marginTop: "1rem",
            padding: "0.5rem",
            border: "1px solid green",
          }}
        >
          <p>
            Url to send: http://localhost:5173/director/create/{inviteToken}
          </p>
          <button onClick={() => setInviteToken(null)}>Yopish</button>
        </div>
      )}
    </div>
  );
}
