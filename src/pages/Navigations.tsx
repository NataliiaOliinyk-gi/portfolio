import { Routes, Route } from "react-router-dom";

import HomePage from "./HomePage/HomePage";
import MyProjectsPage from "./MyProjectsPage/MyProjectsPage";
import ProjectPage from "./ProjectPage/ProjectPage";
import NotFoundPage from "./NotFoundPage/NotFoundPage";

const Navigations = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<MyProjectsPage />} />
        <Route path="/projects:id" element={<ProjectPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default Navigations;
