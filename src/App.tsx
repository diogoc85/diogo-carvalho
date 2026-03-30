import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ProjectDetail } from "./pages/ProjectDetail";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projeto/:slug" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
