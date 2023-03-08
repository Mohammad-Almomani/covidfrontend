import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Footer/Footer";
import AppHeader from "./NavBar/AppHeader";
import AllCountries from "./Pages/AllCountries/AllCountries";
import Home from "./Pages/Home/Home";
import MyRecords from "./Pages/MyRecords/MyRecords";

export default function AppRoutes() {
  return (
    <Router>
      <AppHeader />
      <Routes>
        <Route path="/AllCountries/*" element={<AllCountries />} />
        <Route path="/MyRecords/*" element={<MyRecords />} />
        <Route path="/*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}
