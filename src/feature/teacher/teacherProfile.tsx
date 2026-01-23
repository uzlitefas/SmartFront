import { useState } from "react"
import { FaCamera, FaUpload } from "react-icons/fa"

interface TeacherProfile {
  name: string
  age: string
  phone: string
  email: string
  gender: string
  address: string
  workExperience: string
  qualification: string
  university: string
  diplomaNumber: string
  subject: string
  school: string
  notes: string
  avatar: string
  coverImage: string
}

export default function TeacherProfileEdit() {
  const [profile, setProfile] = useState<TeacherProfile>({
    name: "Alisher Karimov",
    age: "35",
    phone: "+998 90 123 45 67",
    email: "alisher.karimov@maktab.uz",
    gender: "Erkak",
    address: "Toshkent shahar, Mirzo Ulug'bek tumani",
    workExperience: "12",
    qualification: "Oliy toifa",
    university: "Toshkent Davlat Pedagogika Universiteti",
    diplomaNumber: "PDU-2010-12345",
    subject: "Matematika",
    school: "45-son umumta'lim maktabi",
    notes:
      "Xalqaro olimpiadalarga tayyorlovchi ustoz. Tajribali pedagog.",
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    coverImage:
      "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg",
  })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target
    setProfile(prev => ({ ...prev, [name]: value }))
  }

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "avatar" | "coverImage"
  ) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onloadend = () => {
      setProfile(prev => ({ ...prev, [field]: reader.result as string }))
    }
    reader.readAsDataURL(file)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(profile)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">O‘qituvchi profili</h1>

        <form onSubmit={handleSubmit}>
          <div className="bg-card border border-border rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-52 md:h-64">
              <img
                src={profile.coverImage}
                className="w-full h-full object-cover"
              />

              <label className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground cursor-pointer">
                <FaUpload />
                Muqova rasmini yangilash
                <input
                  type="file"
                  hidden
                  onChange={e => handleImageChange(e, "coverImage")}
                />
              </label>
            </div>

            <div className="px-6 pb-8">
              <div className="-mt-16 mb-6">
                <div className="relative inline-block">
                  <img
                    src={profile.avatar}
                    className="w-32 h-32 rounded-full object-cover border-4 border-card"
                  />
                  <label className="absolute bottom-1 right-1 p-2 rounded-full bg-primary text-primary-foreground cursor-pointer">
                    <FaCamera />
                    <input
                      type="file"
                      hidden
                      onChange={e => handleImageChange(e, "avatar")}
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
                    <option>Erkak</option>
                    <option>Ayol</option>
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
                <label className="block mb-2 text-sm font-medium">Izoh</label>
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
