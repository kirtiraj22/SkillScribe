import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "resume/App";
import Analyzer from "analyzer/Analyzer";
const Web = React.lazy(() => import("pages/Web"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Web />} />
          <Route path="/resume" element={<App />} />
          <Route path="/analyzer" element={<Analyzer />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
