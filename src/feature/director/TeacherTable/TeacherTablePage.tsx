import * as React from "react"
import { createTeacherColumns } from "./columns"
import { TeacherAddDrawer } from "./TeacherAddDrawer"

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import type { TeacherTable } from "@/types"
import { teachersData } from "@/constants/teacher"

export default function TeacherTablePage() {
  // backend bo‘lmagani uchun, data state ichida turadi
  const [data, setData] = React.useState<TeacherTable[]>(teachersData)

  function handleAdd(teacher: TeacherTable) {
    setData((prev) => [teacher, ...prev])
  }

  function handleDelete(id: string) {
    const ok = confirm("Teacher o‘chirilsinmi?")
    if (!ok) return
    setData((prev) => prev.filter((t) => t.id !== id))
  }

  const columns = React.useMemo(
    () => createTeacherColumns({ onDelete: handleDelete }),
    []
  )

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold">Teacher Jadvali</h1>
            <p className="text-[var(--muted-foreground)] mt-1">
              Hozircha data constants ichida. Backend keyin ulanadi.
            </p>
          </div>

          <TeacherAddDrawer onAdd={handleAdd} />
        </div>

        <div className="rounded-xl border bg-[var(--card)] overflow-hidden">
          <Table>
            <TableHeader className="bg-[var(--muted)]">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>

            <TableBody>
              {table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        ) || String(cell.getValue() ?? "")}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    Hozircha teacher yo‘q.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
