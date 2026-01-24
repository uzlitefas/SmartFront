import { Outlet } from "react-router-dom";

export function Teacher() {
  return (
    <div className="min-h-screen flex flex-col">
        <Outlet />
    </div>
  );
}
