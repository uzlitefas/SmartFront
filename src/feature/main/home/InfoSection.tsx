import { type ReactNode } from "react";

interface InfoSectionProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

function InfoSection({ title, icon, children }: InfoSectionProps) {
  return (
    <section className="mb-8 md:mb-12">
      <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white shadow-md dark:from-blue-400 dark:to-blue-500">
          {icon}
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground dark:text-foreground-dark">
          {title}
        </h2>
      </div>
      <div className="bg-card dark:bg-card-dark rounded-2xl p-6 md:p-8 shadow-sm border border-border dark:border-border-dark">
        {children}
      </div>
    </section>
  );
}

export default InfoSection;
