import React, { useEffect } from "react";
import {
  NavLink,
  Routes,
  Route,
  useParams,
  useLocation,
  Navigate,
} from "react-router-dom";
import AboutCommon from "../common/AboutCommon";
import Project1 from "../projects/Project1";
import Project2 from "../projects/Project2";
import Project3 from "../projects/Project3";
import StickyNavbar from "../navbar/Projectnavbar";


const ProjectDetails = () => {
  const { projectId } = useParams();

  let ProjectComponent;
  switch (projectId) {
    case "project1":
      ProjectComponent = Project1;
      break;
    case "project2":
      ProjectComponent = Project2;
      break;
    case "project3":
      ProjectComponent = Project3;
      break;
    default:
      ProjectComponent = () => <div>Project not found</div>;
  }

  return <ProjectComponent />;
};

const ProjectPage = () => {
  const location = useLocation();
  const { pathname } = location;
  const projectId = pathname.split("/").pop();

  useEffect(() => {
    if (!projectId) {
      window.location.href = "/projects/project1";
    }
  }, [projectId]);

  return (
    <div className=" min-h-screen text-white ">
      <div>
        <AboutCommon
          heading="Project Overview"
          text="Discover the details of our latest project. This section provides a comprehensive overview, showcasing the core features and objectives of the project. Dive into the specifics and see how our project stands out"
        />
      </div>
      <div className="mt-4 flex">
        <StickyNavbar />
      </div>
      <div className="">
        <Routes>
          <Route path="project1" element={<Project1 />} />
          <Route path="project2" element={<Project2 />} />
          <Route path="project3" element={<Project3 />} />
          <Route path="" element={<Project1 />} />
          <Route path=":projectId" element={<ProjectDetails />} />
        </Routes>
      </div>
      

    </div>
  );
};

export default ProjectPage;
