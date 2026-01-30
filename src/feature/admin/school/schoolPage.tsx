import { useState, useEffect } from "react";
import { useSchool, type School } from "@/stores/school.store";
import { toast } from "react-hot-toast";
import CreateSchoolForm from "./createSchoolForm";
import TableSchool from "./tableSchool";
import DialogSchool from "./dialogSchool";

export default function SchoolPage() {
  const { fetchSchools, fetchSchoolById } = useSchool();

  const [schools, setSchools] = useState<School[]>([]);
  const [loadingSchools, setLoadingSchools] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState<School | null>(null);
  const [showDialog, setShowDialog] = useState(false);

  const loadSchools = async () => {
    setLoadingSchools(true);
    try {
      const res: any = await fetchSchools();
      setSchools(res.items ?? []);
    } catch (err: any) {
      setSchools([]);
    } finally {
      setLoadingSchools(false);
    }
  };

  useEffect(() => {
    loadSchools();
  }, []);

  const handleViewSchool = async (id: string) => {
    try {
      const school = await fetchSchoolById(id);
      setSelectedSchool(school);
      setShowDialog(true);
    } catch (err: any) {
      console.error("Xatolik fetchSchoolById:", err);
      toast.error(err.message || "Maktab malumotini yuklab bo'lmadi");
    }
  };

  return (
    <div className="space-y-6 p-4">
      <CreateSchoolForm />

      <TableSchool
        schools={schools}
        loading={loadingSchools}
        onView={(id) => handleViewSchool(id)}
      />

      {showDialog && selectedSchool && (
        <DialogSchool
          school={selectedSchool}
          onClose={() => setShowDialog(false)}
        />
      )}
    </div>
  );
}
