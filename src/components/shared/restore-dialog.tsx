import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface RestoreDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  type: "student" | "teacher" | "manager" | "room" | "group";
  name: string;
}

export function RestoreDialog({
  open,
  onClose,
  onConfirm,
  type,
  name,
}: RestoreDialogProps) {
  const typeTextMap: Record<string, string> = {
    student: "o‘quvchini",
    teacher: "o‘qituvchini",
    manager: "menedjerni",
    room: "xonani",
    group: "guruhni",
  };

  const displayText = typeTextMap[type] || "obyektni";

  return (
    <AlertDialog open={open} onOpenChange={onClose}>
      <AlertDialogContent className="bg-accent text-accent-foreground">
        <AlertDialogHeader>
          <AlertDialogTitle>{`${name} ni qaytarish`}</AlertDialogTitle>
          <AlertDialogDescription>
            Siz rostdan ham <span className="font-semibold">{name}</span>{" "}
            {displayText} qaytarishni xohlaysizmi?
            <br />
            <span className="text-sm text-muted-foreground">
              Bu amalni tasdiqlasangiz, obyekt asl holatiga qaytariladi.
            </span>
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button variant="outline">Bekor qilish</Button>
          </AlertDialogCancel>

          <AlertDialogAction asChild>
            <Button
              variant="default"
              className="bg-green-400 hover:bg-green-500"
              onClick={onConfirm}
            >
              Qaytarish
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
