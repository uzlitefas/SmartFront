import { type ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  number: string;
  label: string;
  color: "blue" | "green" | "amber" | "purple";
}

const colorClasses = {
  blue: "from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500",
  green: "from-green-500 to-green-600 dark:from-green-400 dark:to-green-500",
  amber: "from-amber-500 to-amber-600 dark:from-amber-400 dark:to-amber-500",
  purple:
    "from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500",
};

function StatCard({ icon, number, label, color }: StatCardProps) {
  return (
    <div className="bg-card dark:bg-card-dark rounded-2xl p-4 md:p-6 shadow-sm border border-border dark:border-border-dark hover:shadow-md transition-all duration-300">
      <div
        className={`inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br ${colorClasses[color]} rounded-xl text-white mb-3 md:mb-4`}
      >
        {icon}
      </div>
      <div className="text-2xl md:text-3xl font-bold text-foreground dark:text-foreground-dark mb-1">
        {number}
      </div>
      <div className="text-muted-foreground dark:text-muted-foreground-dark font-medium text-sm md:text-base">
        {label}
      </div>
    </div>
  );
}

export default StatCard;
