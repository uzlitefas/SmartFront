import { useState } from "react";

export default function CreateVideo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState<string[]>([]);
  const [featureInput, setFeatureInput] = useState("");

  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);

  const [video, setVideo] = useState<File | null>(null);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);

  const addFeature = () => {
    if (!featureInput.trim()) return;
    setFeatures((prev) => [...prev, featureInput]);
    setFeatureInput("");
  };

  const handleThumbnail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setThumbnail(file);
    setThumbnailPreview(URL.createObjectURL(file));
  };

  const handleVideo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setVideo(file);
    setVideoPreview(URL.createObjectURL(file));
  };

  const handleSave = () => {
    if (!title || !video || !thumbnail) return;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("features", JSON.stringify(features));
    formData.append("thumbnail", thumbnail);
    formData.append("video", video);

    console.log("READY:", {
      title,
      description,
      features,
      thumbnail,
      video,
    });

    // backendga tayyor
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-10">
      <h1 className="text-3xl font-bold">Add Video Course</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-5">
          <input
            type="text"
            placeholder="Course title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-xl px-4 py-3"
          />

          <textarea
            placeholder="Short description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className="w-full border rounded-xl px-4 py-3"
          />

          <div className="space-y-2">
            <label className="font-medium">Features</label>
            <div className="flex gap-2">
              <input
                value={featureInput}
                onChange={(e) => setFeatureInput(e.target.value)}
                placeholder="e.g. Speaking"
                className="flex-1 border rounded-xl px-4 py-2"
              />
              <button
                onClick={addFeature}
                className="px-4 rounded-xl bg-black text-white"
              >
                Add
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {features.map((f, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                >
                  ✓ {f}
                </span>
              ))}
            </div>
          </div>

          <div>
            <label className="font-medium">Thumbnail image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleThumbnail}
              className="w-full"
            />
          </div>

          <div>
            <label className="font-medium">Video file</label>
            <input
              type="file"
              accept="video/*"
              onChange={handleVideo}
              className="w-full"
            />
          </div>

          <button
            onClick={handleSave}
            className="w-full bg-black text-white py-3 rounded-xl"
          >
            Save course
          </button>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow space-y-4">
          {thumbnailPreview ? (
            <img
              src={thumbnailPreview}
              className="w-full h-48 object-cover rounded-xl"
            />
          ) : (
            <div className="w-full h-48 bg-gray-100 rounded-xl flex items-center justify-center">
              Thumbnail preview
            </div>
          )}

          <h2 className="text-xl font-bold">{title || "Course title"}</h2>
          <p className="text-gray-600 text-sm">
            {description || "Course description"}
          </p>

          <ul className="space-y-1">
            {features.map((f, i) => (
              <li key={i} className="text-sm text-green-600">
                ✓ {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
