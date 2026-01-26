// CreateVideo.tsx
import { createVideoText, type Lang } from "@/constants";
import { useState } from "react";

type FeatureType = "main" | "repeat";

interface Feature {
  id: number;
  text: string;
  type: FeatureType;
}

export default function CreateVideo() {
  const [lang, setLang] = useState<Lang>("uz");
  const t = createVideoText[lang];

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
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-10">
      <div className="flex gap-2">
        <button onClick={() => setLang("uz")}>UZ</button>
        <button onClick={() => setLang("ru")}>RU</button>
        <button onClick={() => setLang("en")}>EN</button>
      </div>

      <h1 className="text-3xl font-bold">{t.title}</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-5">
          <input
            placeholder={t.courseTitle}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-xl px-4 py-3"
          />

          <textarea
            placeholder={t.description}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className="w-full border rounded-xl px-4 py-3"
          />

          <div className="space-y-2">
            <label className="font-medium">{t.features}</label>

            <div className="flex gap-2">
              <input
                value={featureInput}
                onChange={(e) => setFeatureInput(e.target.value)}
                placeholder={t.featurePlaceholder}
                className="flex-1 border rounded-xl px-4 py-2"
              />

              <select
                value={featureType}
                onChange={(e) =>
                  setFeatureType(e.target.value as FeatureType)
                }
                className="border rounded-xl px-3"
              >
                <option value="main">{t.main}</option>
                <option value="repeat">{t.repeat}</option>
              </select>

              <button
                onClick={addFeature}
                className="px-4 rounded-xl bg-black text-white"
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
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  <span>✓ {f.text}</span>
                  <button onClick={() => deleteFeature(f.id)}>✕</button>
                </div>
              ))}
            </div>
          </div>

          <input type="file" accept="image/*" onChange={(e) =>
            setThumbnailPreview(e.target.files?.[0]
              ? URL.createObjectURL(e.target.files[0])
              : null)
          } />

          <input type="file" accept="video/*" onChange={(e) =>
            setVideoPreview(e.target.files?.[0]
              ? URL.createObjectURL(e.target.files[0])
              : null)
          } />
        </div>

        <div className="bg-white rounded-2xl p-6 shadow space-y-4">
          {thumbnailPreview && (
            <img
              src={thumbnailPreview}
              className="w-full h-48 object-cover rounded-xl"
            />
          )}

          <h2 className="text-xl font-bold">
            {title || t.previewTitle}
          </h2>

          <p className="text-gray-600 text-sm">
            {description || t.previewDescription}
          </p>

          <ul>
            {features.map((f) => (
              <li
                key={f.id}
                className={
                  f.type === "main"
                    ? "text-green-600"
                    : "text-yellow-600"
                }
              >
                ✓ {f.text}
              </li>
            ))}
          </ul>

          {videoPreview && (
            <video
              src={videoPreview}
              controls
              className="w-full rounded-xl"
            />
          )}
        </div>
      </div>
    </div>
  );
}
