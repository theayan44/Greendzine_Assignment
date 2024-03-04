import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/DashboardPage";
import Login from "./pages/LoginPage";
import Home from "./pages/HomePage";
import EmployeeListPage from "./pages/EmployeeListPage";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div>
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employeeList" element={<EmployeeListPage />} />
      </Routes>
    </div>

  );
}

export default App;
