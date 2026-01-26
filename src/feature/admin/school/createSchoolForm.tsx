import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSchool } from "@/stores/school.store";

export default function CreateSchoolForm() {
  const { createSchool } = useSchool();
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [inviteToken, setInviteToken] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setInviteToken(null);

    try {
      const data = await createSchool({ name, slug });
      setInviteToken(data.inviteToken);
    } catch (err: any) {
      const msg = err?.message || "Maktab yaratishda noma’lum xatolik";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md rounded-2xl shadow-xl overflow-hidden">
        <CardHeader>
          <CardTitle className="text-xl text-center">Maktab yaratish</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Maktab nomi"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              placeholder="Slug"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              required
            />
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Yaratilyapti..." : "Maktab yaratish"}
            </Button>
          </form>

          {error && (
            <p className="text-sm text-destructive text-center">{error}</p>
          )}

          {inviteToken && (
            <div className="rounded-lg border border-primary/30 bg-primary/5 p-3 space-y-2">
              <p className="text-sm break-all">
                Url to send:
                <br />
                <span className="font-medium">
                  {`http://localhost:5173/director/create/${inviteToken}`}
                </span>
              </p>
              <Button
                variant="secondary"
                className="w-full"
                onClick={() => setInviteToken(null)}
              >
                Yopish
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
