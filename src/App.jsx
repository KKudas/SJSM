import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

//COMPONENTS
import UserLayout from "./components/Layout/UserLayout.jsx";

//PAGES
import HomePage from "./pages/HomePage/HomePage.jsx";
import AboutPage from "./pages/AboutPage/AboutPage.jsx";
import BlogsPage from "./pages/BlogsPage/BlogsPage.jsx";
import ContactPage from "./pages/ContactPage/ContactPage.jsx";
import OfferingsPage from "./pages/OfferingsPage/OfferingsPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout/>}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/offerings" element={<OfferingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
