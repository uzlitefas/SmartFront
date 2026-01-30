import type { TeacherTable } from "@/types"
import type { ColumnDef } from "@tanstack/react-table"

export const teacherColumns: ColumnDef<TeacherTable>[] = [
  {
    accessorKey: "fullName",
    header: "Ism familiya",
  },
  {
    accessorKey: "subject",
    header: "Fan",
  },
  {
    accessorKey: "phone",
    header: "Telefon",
  },
  {
    accessorKey: "experience",
    header: "Ish staji",
  },
  {
    accessorKey: "status",
    header: "Holati",
    cell: ({ row }) => (
      <span
        className={
          row.original.status === "Active"
            ? "text-green-600 font-medium"
            : "text-red-600 font-medium"
        }
      >
        {row.original.status}
      </span>
    ),
  },
]
