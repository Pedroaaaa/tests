import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
// import { Role } from "../types/Role";

export default function AppRoutes(/*{
  admin,
  role,
}: {
  admin: boolean;
  role: Role;
}*/) {
  //   const isFullAdmin = role === Role.ADMIN;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  );
}
