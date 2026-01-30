import { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useDirector } from "@/stores/director.store";

export default function DirectorCreatePage() {
  const { "invite-token": inviteToken } = useParams<{
    "invite-token": string;
  }>();
  const { acceptInvite } = useDirector();
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
      const data = await acceptInvite(inviteToken, password, phone);
      setSuccess("Director account yaratildi! Id: " + data.userId);
    } catch (err: any) {
      console.error("Xatolik acceptInvite:", err.response?.data || err);
      setError(err.response?.data?.message || "Xatolik yuz berdi");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md rounded-2xl shadow-xl overflow-hidden">
        <CardHeader>
          <CardTitle className="text-xl text-center">
            Director account yaratish
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Telefon raqam (misol: +998901234567)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <Input
              type="password"
              placeholder="Yangi parol"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <Button
              type="submit"
              variant="secondary"
              className="w-full"
              disabled={loading}
            >
              {loading ? "Yaratilyapti..." : "Yaratish"}
            </Button>
          </form>

          {/* ERROR */}
          {error && (
            <p className="text-sm text-destructive text-center">{error}</p>
          )}

          {/* SUCCESS */}
          {success && (
            <div className="rounded-lg border border-green-500/30 bg-green-500/10 p-3">
              <p className="text-sm text-green-600 text-center">{success}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
