import { useState } from "react";

type FeatureType = "main" | "repeat";

interface Feature {
  id: number;
  text: string;
  type: FeatureType;
}

export default function CreateVideo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [features, setFeatures] = useState<Feature[]>([]);
  const [featureInput, setFeatureInput] = useState("");
  const [featureType, setFeatureType] = useState<FeatureType>("main");

  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);

  const addFeature = () => {
    if (!featureInput.trim()) return;
    setFeatures((p) => [
      ...p,
      { id: Date.now(), text: featureInput, type: featureType },
    ]);
    setFeatureInput("");
    setFeatureType("main");
  };

  const deleteFeature = (id: number) => {
    setFeatures((p) => p.filter((f) => f.id !== id));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-10 bg-background text-foreground">
      <h1 className="text-3xl font-bold">{t.title}</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-5">
          <input
            placeholder={t.courseTitle}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-xl px-4 py-3 bg-card text-card-foreground border border-input focus:ring-2 ring-ring"
          />

          <textarea
            placeholder={t.description}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className="w-full rounded-xl px-4 py-3 bg-card text-card-foreground border border-input focus:ring-2 ring-ring"
          />

          <div className="space-y-2">
            <label className="font-medium">{t.features}</label>

            <div className="flex gap-2">
              <input
                value={featureInput}
                onChange={(e) => setFeatureInput(e.target.value)}
                placeholder={t.featurePlaceholder}
                className="flex-1 rounded-xl px-4 py-2 bg-card text-card-foreground border border-input"
              />

              <select
                value={featureType}
                onChange={(e) => setFeatureType(e.target.value as FeatureType)}
                className="rounded-xl px-3 bg-card text-card-foreground border border-input"
              >
                <option value="main">{t.main}</option>
                <option value="repeat">{t.repeat}</option>
              </select>

              <button
                onClick={addFeature}
                className="px-4 rounded-xl bg-primary text-primary-foreground"
              >
                {t.add}
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {features.map((f) => (
                <div
                  key={f.id}
                  className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
                    f.type === "main"
                      ? "bg-[oklch(0.93_0.12_140)] text-[oklch(0.35_0.15_140)]"
                      : "bg-[oklch(0.95_0.12_95)] text-[oklch(0.45_0.15_95)]"
                  }`}
                >
                  <span>✓ {f.text}</span>
                  <button onClick={() => deleteFeature(f.id)}>✕</button>
                </div>
              ))}
            </div>
          </div>

          <input
            type="file"
            accept="image/*"
            className="block w-full text-sm text-muted-foreground"
            onChange={(e) =>
              setThumbnailPreview(
                e.target.files?.[0]
                  ? URL.createObjectURL(e.target.files[0])
                  : null,
              )
            }
          />

          <input
            type="file"
            accept="video/*"
            className="block w-full text-sm text-muted-foreground"
            onChange={(e) =>
              setVideoPreview(
                e.target.files?.[0]
                  ? URL.createObjectURL(e.target.files[0])
                  : null,
              )
            }
          />
        </div>

        <div className="rounded-2xl p-6 shadow bg-card text-card-foreground space-y-4">
          {thumbnailPreview ? (
            <img
              src={thumbnailPreview}
              className="w-full h-48 object-cover rounded-xl"
            />
          ) : (
            <div className="w-full h-48 rounded-xl bg-muted flex items-center justify-center text-muted-foreground">
              Thumbnail
            </div>
          )}

          <h2 className="text-xl font-bold">{title || t.previewTitle}</h2>

          <p className="text-sm text-muted-foreground">
            {description || t.previewDescription}
          </p>

          <ul className="space-y-1">
            {features.map((f) => (
              <li
                key={f.id}
                className={`text-sm ${
                  f.type === "main"
                    ? "text-[oklch(0.6_0.14_140)]"
                    : "text-[oklch(0.7_0.14_95)]"
                }`}
              >
                ✓ {f.text}
              </li>
            ))}
          </ul>

          {videoPreview && (
            <video
              src={videoPreview}
              controls
              className="w-full rounded-xl border border-border"
            />
          )}
        </div>
      </div>
    </div>
  );
}
