import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { School } from "@/stores/school.store";
import type { FC } from "react";

interface DialogSchoolProps {
  school: School;
  onClose: () => void;
}

const DialogSchool: FC<DialogSchoolProps> = ({ school, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <Card className="w-full max-w-md rounded-2xl shadow-xl overflow-hidden">
        <CardHeader>
          <CardTitle className="text-xl text-center">{school.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>
            <span className="font-medium">Slug:</span> {school.slug}
          </p>
          <p>
            <span className="font-medium">Holat:</span>{" "}
            {school.isActive ? "Faol" : "Nofaol"}
          </p>
          <p>
            <span className="font-medium">Yaratilgan:</span>{" "}
            {new Date(school.createdAt).toLocaleString()}
          </p>
          <p>
            <span className="font-medium">Yangilangan:</span>{" "}
            {new Date(school.updatedAt).toLocaleString()}
          </p>
          <Button variant="secondary" className="w-full mt-4" onClick={onClose}>
            Yopish
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default DialogSchool;
