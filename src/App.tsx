import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Search from "./pages/Search";
import ServiceDetails from "./pages/ServiceDetails";
import SalonDetails from "./pages/SalonDetails";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Confirmation from "./pages/Confirmation";
import Offers from "./pages/Offers";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/service/:id" element={<ServiceDetails />} />
        <Route path="/salon/:id" element={<SalonDetails />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/offers" element={<Offers />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
