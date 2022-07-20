import "./app.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        {/* <Route path="/forgetpassword" element={<ForgetPassword />} /> */}
      </Routes>
    </>
  );
}
