import { Button } from "@/components/ui/button";
import type { School } from "@/stores/school.store";
import type { FC } from "react";

interface TableSchoolProps {
  schools: School[];
  loading: boolean;
  onView: (id: string) => void;
}

const TableSchool: FC<TableSchoolProps> = ({ schools, loading, onView }) => {
  if (loading) {
    return <p className="text-center text-muted-foreground">Yuklanmoqda...</p>;
  }

  if (!schools || schools.length === 0) {
    return (
      <p className="text-center text-muted-foreground">Maktablar topilmadi</p>
    );
  }

  return (
    <table className="w-full border-collapse border border-border text-sm">
      <thead className="bg-muted text-muted-foreground">
        <tr>
          <th className="p-2 border border-border">#</th>
          <th className="p-2 border border-border">Nomi</th>
          <th className="p-2 border border-border">Slug</th>
          <th className="p-2 border border-border">Holat</th>
          <th className="p-2 border border-border">Yaratilgan</th>
          <th className="p-2 border border-border">Harakat</th>
        </tr>
      </thead>
      <tbody>
        {schools.map((school, idx) => (
          <tr key={school.id} className="hover:bg-muted/20">
            <td className="p-2 border border-border text-center">{idx + 1}</td>
            <td className="p-2 border border-border">{school.name}</td>
            <td className="p-2 border border-border">{school.slug}</td>
            <td className="p-2 border border-border text-center">
              {school.isActive ? "Faol" : "Nofaol"}
            </td>
            <td className="p-2 border border-border text-center">
              {new Date(school.createdAt).toLocaleDateString()}
            </td>
            <td className="p-2 border border-border text-center">
              <Button size="sm" onClick={() => onView(school.id)}>
                Ko‘rish
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableSchool;
