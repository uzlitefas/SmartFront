"use client"
import { useState } from "react"
import { FaCamera, FaUpload } from "react-icons/fa"
import {
  teacherProfileData,
  type TeacherProfile,
} from "@/constants"
export default function TeacherProfileEditPage() {
  const [profile, setProfile] =
    useState<TeacherProfile>(teacherProfileData)
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target
    setProfile(prev => ({
      ...prev,
      [name]: value,
    }))
  }
  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "avatar" | "coverImage"
  ) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onloadend = () => {
      setProfile(prev => ({
        ...prev,
        [field]: reader.result as string,
      }))
    }
    reader.readAsDataURL(file)
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Yuborilgan maʼlumot:", profile)
  }
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">
          O‘qituvchi profili
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="bg-card border border-border rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-52 md:h-64">
              <img
                src={profile.coverImage}
                alt="Cover"
                className="w-full h-full object-cover"
              />
              <label className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground cursor-pointer">
                <FaUpload />
                Muqova rasmini yangilash
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={e =>
                    handleImageChange(e, "coverImage")
                  }
                />
              </label>
            </div>
            <div className="px-6 pb-8">
              <div className="-mt-16 mb-6">
                <div className="relative inline-block">
                  <img
                    src={profile.avatar}
                    alt="Avatar"
                    className="w-32 h-32 rounded-full object-cover border-4 border-card"
                  />
                  <label className="absolute bottom-1 right-1 p-2 rounded-full bg-primary text-primary-foreground cursor-pointer">
                    <FaCamera />
                    <input
                      type="file"
                      hidden
                      accept="image/*"
                      onChange={e =>
                        handleImageChange(e, "avatar")
                      }
                    />
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  ["name", "Ism-familiya"],
                  ["age", "Yoshi"],
                  ["phone", "Telefon raqami"],
                  ["email", "Email"],
                  ["address", "Manzil"],
                  ["workExperience", "Ish staji (yil)"],
                  ["university", "Tugatgan OTM"],
                  ["diplomaNumber", "Diplom raqami"],
                  ["subject", "Fan"],
                  ["school", "Maktab"],
                ].map(([key, label]) => (
                  <div key={key}>
                    <label className="block mb-2 text-sm font-medium">
                      {label}
                    </label>
                    <input
                      name={key}
                      value={(profile as any)[key]}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg bg-background border border-border focus:ring-2 focus:ring-ring outline-none"
                    />
                  </div>
                ))}
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Jinsi
                  </label>
                  <select
                    name="gender"
                    value={profile.gender}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg bg-background border border-border focus:ring-2 focus:ring-ring outline-none"
                  >
                    <option value="Erkak">Erkak</option>
                    <option value="Ayol">Ayol</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Malaka darajasi
                  </label>
                  <select
                    name="qualification"
                    value={profile.qualification}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg bg-background border border-border focus:ring-2 focus:ring-ring outline-none"
                  >
                    <option>Oliy toifa</option>
                    <option>1-toifa</option>
                    <option>2-toifa</option>
                    <option>Toifasiz</option>
                  </select>
                </div>
              </div>
              <div className="mt-6">
                <label className="block mb-2 text-sm font-medium">
                  Izoh
                </label>
                <textarea
                  name="notes"
                  rows={4}
                  value={profile.notes}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg bg-background border border-border focus:ring-2 focus:ring-ring outline-none resize-none"
                />
              </div>
              <div className="flex justify-end mt-6">
                <button
                  type="submit"
                  className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 focus:ring-2 focus:ring-ring"
                >
                  Profilni yangilash
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
