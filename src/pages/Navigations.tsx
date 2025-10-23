import { Routes, Route } from "react-router-dom";

import HomePage from "./HomePage/HomePage";
import SkillsPage from "./SkillsPage/SkillsPage";
import MyProjectsPage from "./MyProjectsPage/MyProjectsPage";
import AboutPage from "./AboutPage/AboutPage";
import ContactPage from "./ContactPage/ContactPage";
import ProjectPage from "./ProjectPage/ProjectPage";
import NotFoundPage from "./NotFoundPage/NotFoundPage";
import PolicyPage from "./PolicyPage/PolicyPage";

const Navigations = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<MyProjectsPage />} />
        <Route path="/projects:id" element={<ProjectPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/policy" element={<PolicyPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default Navigations;
