import type { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import type { TeacherTable } from "@/types"

type Props = {
  onDelete: (id: string) => void
}

export function createTeacherColumns({ onDelete }: Props): ColumnDef<TeacherTable>[] {
  return [
    {
      accessorKey: "fullName",
      header: "Ism",
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
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "qualification",
      header: "Malaka",
    },
    {
      id: "actions",
      header: "Action",
      cell: ({ row }) => {
        const teacher = row.original
        return (
          <Button
            variant="destructive"
            size="sm"
            onClick={() => onDelete(teacher.id)}
          >
            O‘chirish
          </Button>
        )
      },
    },
  ]
}
