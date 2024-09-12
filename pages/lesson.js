import dynamic from "next/dynamic";
import Navbar from "./navbar";
import Home from "./home";
import { Route, Routes } from "react-router-dom";

const Router = dynamic(
  () => import("react-router-dom").then((mod) => mod.BrowserRouter),
  { ssr: false }
);

export default function Lesson() {
  return (
    <Router>
      <div className="app">
        <Navbar />

        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/lesson" element={<Home />} />
            {/* Add more routes as needed */}
            <Route path="*" element={<div>Not found</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
