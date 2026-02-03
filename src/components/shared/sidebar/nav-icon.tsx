import { useSidebar } from "@/components/ui/sidebar";

function NavIcon() {
  const { state } = useSidebar();
  return (
    <div>
      {state === "expanded" ? (
        <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-400  transition-transform duration-300">
          Online School
        </h1>
      ) : (
        <h1 className="pt-[7px] text-center text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-400  transition-transform duration-300">
          OS
        </h1>
      )}
    </div>
  );
}

export default NavIcon;
