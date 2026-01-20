interface FeatureCardProps {
  title: string;
  description: string;
  color: "blue" | "green" | "amber";
}

const colorClasses = {
  blue: {
    gradient: "from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500",
    bg: "bg-secondary dark:bg-primary-dark",
    border: "border-border dark:border-border-dark",
  },
  green: {
    gradient:
      "from-green-500 to-green-600 dark:from-green-400 dark:to-green-500",
    bg: "bg-secondary dark:bg-secondary-dark",
    border: "border-border dark:border-border-dark",
  },
  amber: {
    gradient:
      "from-amber-500 to-amber-600 dark:from-amber-400 dark:to-amber-500",
    bg: "bg-secondary dark:bg-accent-dark",
    border: "border-border dark:border-border-dark",
  },
};

function FeatureCard({ title, description, color }: FeatureCardProps) {
  const colors = colorClasses[color];

  return (
    <div
      className={`${colors.bg} rounded-xl p-4 md:p-6 border ${colors.border} hover:shadow-md transition-shadow`}
    >
      <div
        className={`w-1.5 md:w-2 h-10 md:h-12 bg-gradient-to-b ${colors.gradient} rounded-full mb-3 md:mb-4`}
      ></div>
      <h3 className="text-lg md:text-xl font-bold text-foreground dark:text-foreground-dark mb-2 md:mb-3">
        {title}
      </h3>
      <p className="text-sm md:text-base text-muted-foreground dark:text-muted-foreground-dark leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;
