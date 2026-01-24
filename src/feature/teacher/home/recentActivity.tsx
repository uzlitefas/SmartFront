import type { Task } from "@/types";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Clock, Play, CheckSquare, HelpCircle } from "lucide-react";

interface Props {
  tasks: Task[];
}

export default function RecentActivity({ tasks }: Props) {
  const getRemaining = (date: string) => {
    const diff = new Date(date).getTime() - Date.now();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    if (days < 0) return "Muddati o‘tgan";
    if (days === 0) return "Bugun";
    return `${days} kun qoldi`;
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Play className="w-5 h-5 text-blue-500" />;
      case "test":
        return <CheckSquare className="w-5 h-5 text-green-500" />;
      case "savol-javob":
        return <HelpCircle className="w-5 h-5 text-purple-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-400" />;
    }
  };

  const getPriorityColor = (priority?: string) => {
    switch (priority) {
      case "yuqori":
        return "bg-red-500";
      case "o‘rta":
        return "bg-yellow-500";
      case "past":
        return "bg-green-500";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div className="space-y-4">
      {tasks.length === 0 ? (
        <p className="text-sm text-[var(--muted-foreground)]">Vazifalar yo‘q</p>
      ) : (
        tasks.map((task) => (
          <Card key={task.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {getTypeIcon(task.type)}
                <CardTitle className="text-sm font-medium">
                  {task.title}
                </CardTitle>
              </div>
              <span
                className={`text-xs font-medium ${
                  new Date(task.due_date).getTime() < Date.now()
                    ? "text-red-500"
                    : "text-gray-500"
                }`}
              >
                {getRemaining(task.due_date)}
              </span>
            </CardHeader>

            <CardContent className="space-y-2 text-xs text-[var(--muted-foreground)]">
              {/* Description */}
              <p>{task.description || "Vazifa haqida ma’lumot mavjud emas."}</p>

              {/* Progress */}
              {task.progress !== undefined && (
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-blue-500"
                    style={{ width: `${task.progress}%` }}
                  ></div>
                </div>
              )}

              {/* Priority */}
              {task.priority && (
                <span
                  className={`inline-block px-2 py-0.5 text-[10px] font-semibold text-white rounded-full ${getPriorityColor(
                    task.priority,
                  )}`}
                >
                  {task.priority.charAt(0).toUpperCase() +
                    task.priority.slice(1)}
                </span>
              )}
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}
