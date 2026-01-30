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

interface DeleteDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  type: "student" | "teacher" | "manager" | "room" | "group";
  name: string;
}

export function DeleteDialog({
  open,
  onClose,
  onConfirm,
  type,
  name,
}: DeleteDialogProps) {
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
          <AlertDialogTitle>{`${name} ni o‘chirish`}</AlertDialogTitle>
          <AlertDialogDescription>
            Siz rostdan ham <span className="font-semibold">{name}</span>{" "}
            {displayText} o‘chirmoqchimisiz?
            <br />
            <span className="text-sm text-muted-foreground">
              Bu amalni tasdiqlasangiz, obyekt tarixga o'tkaziladi yoki
              o‘chiriladi.
            </span>
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button variant="outline">Bekor qilish</Button>
          </AlertDialogCancel>

          <AlertDialogAction asChild>
            <Button variant="destructive" onClick={onConfirm}>
              O‘chirish
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
