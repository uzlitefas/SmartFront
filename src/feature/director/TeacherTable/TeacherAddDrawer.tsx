import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { TeacherTable } from "@/types"
import { Textarea } from "@/components/ui/textarea"

function makeId() {
  return "t-" + Math.random().toString(16).slice(2)
}

interface Props {
  onAdd: (teacher: TeacherTable) => void
}

export function TeacherAddDrawer({ onAdd }: Props) {
  const [open, setOpen] = React.useState(false)

  const [form, setForm] = React.useState({
    fullName: "",
    age: "",
    phone: "",
    email: "",
    gender: "Erkak",
    address: "",
    workExperience: "",
    qualification: "Toifasiz",
    university: "",
    diplomaNumber: "",
    subject: "",
    school: "",
    notes: "",
  })

  function update(key: string, value: string) {
    setForm((p) => ({ ...p, [key]: value }))
  }

  function handleAdd() {
    if (!form.fullName.trim()) return alert("Ism-familiya kiriting!")
    if (!form.email.trim()) return alert("Email kiriting!")

    const newTeacher: TeacherTable = {
      id: makeId(),
      fullName: form.fullName,
      age: Number(form.age || 0),
      phone: form.phone,
      email: form.email,
      gender: form.gender as TeacherTable["gender"],
      address: form.address,
      workExperience: Number(form.workExperience || 0),
      qualification: form.qualification as TeacherTable   ["qualification"],
      university: form.university,
      diplomaNumber: form.diplomaNumber,
      subject: form.subject,
      school: form.school,
      notes: form.notes,
    }

    onAdd(newTeacher)
    setOpen(false)

    // formni tozalash
    setForm({
      fullName: "",
      age: "",
      phone: "",
      email: "",
      gender: "Erkak",
      address: "",
      workExperience: "",
      qualification: "Toifasiz",
      university: "",
      diplomaNumber: "",
      subject: "",
      school: "",
      notes: "",
    })
  }

  return (
    <Drawer direction="right" open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className="font-semibold">+ Teacher qo‘shish</Button>
      </DrawerTrigger>

      <DrawerContent className="w-full sm:max-w-xl">
        <DrawerHeader>
          <DrawerTitle>Yangi o‘qituvchi qo‘shish</DrawerTitle>
        </DrawerHeader>

        <div className="no-scrollbar overflow-y-auto px-4 pb-4 max-h-[70vh]">
          <div className="grid gap-4">
            <div>
              <Label>Ism-familiya</Label>
              <Input
                value={form.fullName}
                onChange={(e) => update("fullName", e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label>Yoshi</Label>
                <Input
                  type="number"
                  value={form.age}
                  onChange={(e) => update("age", e.target.value)}
                />
              </div>

              <div>
                <Label>Telefon</Label>
                <Input
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label>Email</Label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                />
              </div>

              <div>
                <Label>Jinsi</Label>
                <Select
                  value={form.gender}
                  onValueChange={(v) => update("gender", v)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Tanlang" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Erkak">Erkak</SelectItem>
                    <SelectItem value="Ayol">Ayol</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label>Manzil</Label>
              <Input
                value={form.address}
                onChange={(e) => update("address", e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label>Ish staji (yil)</Label>
                <Input
                  type="number"
                  value={form.workExperience}
                  onChange={(e) => update("workExperience", e.target.value)}
                />
              </div>

              <div>
                <Label>Malaka darajasi</Label>
                <Select
                  value={form.qualification}
                  onValueChange={(v) => update("qualification", v)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Tanlang" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Oliy toifa">Oliy toifa</SelectItem>
                    <SelectItem value="1-toifa">1-toifa</SelectItem>
                    <SelectItem value="2-toifa">2-toifa</SelectItem>
                    <SelectItem value="Toifasiz">Toifasiz</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label>Tugatgan OTM</Label>
              <Input
                value={form.university}
                onChange={(e) => update("university", e.target.value)}
              />
            </div>

            <div>
              <Label>Diplom raqami</Label>
              <Input
                value={form.diplomaNumber}
                onChange={(e) => update("diplomaNumber", e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label>Fan</Label>
                <Input
                  value={form.subject}
                  onChange={(e) => update("subject", e.target.value)}
                />
              </div>

              <div>
                <Label>Maktab</Label>
                <Input
                  value={form.school}
                  onChange={(e) => update("school", e.target.value)}
                />
              </div>
            </div>

            <div>
              <Label>Izoh</Label>
              <Textarea
                rows={4}
                value={form.notes}
                onChange={(e) => update("notes", e.target.value)}
              />
            </div>
          </div>
        </div>

        <DrawerFooter>
          <Button onClick={handleAdd}>Saqlash</Button>
          <DrawerClose asChild>
            <Button variant="outline">Bekor qilish</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
