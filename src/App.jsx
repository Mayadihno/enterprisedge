import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ScrollToTop from "./static/ScrollTop";
import Home from "./components/Home/Home";
import Contact from "./screens/Contact";
import Footer from "./components/footer/Footer";
import Login from "./components/auth/Login";
import PRoute from "./protected/PRoute";
import Dashboard from "./components/admin/Dashboard";
import Solution from "./screens/Solution";
import Portfolio from "./screens/Portfolio";
import Insights from "./screens/Insights";
import Events from "./screens/Events";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/events" element={<Events />} />
        <Route path="/*" element={<PRoute />}>
          <Route path="admin-dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
