import { Routes, Route, HashRouter as Router } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import AboutPage from "./Pages/AboutPage";
import AnnouncePage from "./Pages/AnnouncePage";
import ErrorPage from "./Pages/ErrorPage";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="announce/:id" element={<AnnouncePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
