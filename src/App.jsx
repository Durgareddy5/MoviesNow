import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShowPage from "./pages/ShowPage";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/show/:id" element={<ShowPage />} />
      </Routes>
    </BrowserRouter>
  );
}