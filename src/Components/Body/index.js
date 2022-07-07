import { Routes, Route } from "react-router-dom";
import AutoMode from "../AutoMode";
import Reports from "../Reports";

function Body() {
  return (
    <div className="bg-gray-300">
      <Routes>
        <Route exact path="/prod" element={<AutoMode />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </div>
  );
}

export default Body;
