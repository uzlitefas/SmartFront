import { Route, Routes } from "react-router-dom";
import CreateTeacher from "./create/CreateTeacher";

function Navbar() {
  return (
    <>
      <Routes>
        <Route path="/director/home" element={<CreateTeacher />} />
      </Routes>
    </>
  );
}

export default Navbar;
