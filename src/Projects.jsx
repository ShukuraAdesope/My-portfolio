
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Projects() {

  const [projects, setProjects] = useState([]);

  const defaultProjects = [

    {
      id: "local1",
      title: "Web Interface Term Project",
      description:
        "A complete web interface project focusing on layout design, responsiveness, and usability.",
      link: "https://shukuraadesope.github.io/web-interface-term-project/"
    },

    {
      id: "local2",
      title: "JavaScript Assignment 2",
      description:
        "A JavaScript-based project demonstrating DOM manipulation and interactive features.",
      link: "https://shukuraadesope.github.io/javascript-assignment-2/"
    },

    {
      id: "local3",
      title: "JavaScript Assignment 6",
      description:
        "An advanced JavaScript assignment showcasing logic handling and structured code.",
      link: "https://shukuraadesope.github.io/javascript-assignment-6/"
    },

    {
      id: "local4",
      title: "JavaScript Test 1",
      description:
        "A practical JavaScript test focused on problem-solving and core programming concepts.",
      link: "https://shukuraadesope.github.io/javascript-test-1/"
    }

  ];

  const loadProjects = () => {

    const savedProjects =
      JSON.parse(localStorage.getItem("projects")) || [];

    setProjects([

      ...defaultProjects,

      ...savedProjects

    ]);

  };

  useEffect(() => {

    loadProjects();

  }, []);


  const deleteProject = (id) => {

    const updatedProjects =
      projects.filter(project => project.id !== id);

    const localOnly =
      updatedProjects.filter(project =>
        project.id.toString().length > 10
      );

    localStorage.setItem(

      "projects",

      JSON.stringify(localOnly)

    );

    alert("Project deleted successfully");

    loadProjects();

  };


  return (

    <main className="projects-page">

      <section className="projects-header">

        <h1>My Projects</h1>

        <p>
          Below are some of the projects I have worked on during my studies.
          These projects demonstrate my skills in frontend development,
          JavaScript, and web design.
        </p>

      </section>


      <section className="projects-grid">

        {projects.map((project) => (

          <div key={project.id} className="project-card">

            <h3>{project.title}</h3>

            <p>{project.description}</p>


            {project.link && (

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View Live Project
              </a>

            )}


            {project.completion && (

              <p>

                Completion date:

                {" "}

                {new Date(project.completion).toLocaleDateString()}

              </p>

            )}


            {/* show edit/delete only for added projects */}
            {project.id.toString().length > 10 && (

              <>

                <Link to={`/edit-project/${project.id}`}>

                  <button>Edit</button>

                </Link>


                <button onClick={() => deleteProject(project.id)}>

                  Delete

                </button>

              </>

            )}

          </div>

        ))}

      </section>

    </main>

  );

}