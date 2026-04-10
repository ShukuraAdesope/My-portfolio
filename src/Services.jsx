import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Services() {

  const [services, setServices] = useState([]);

  const defaultServices = [

    {
      id: "local1",
      title: "Web Development",
      description:
        "Building responsive and user-friendly websites using modern web technologies and best practices."
    },

    {
      id: "local2",
      title: "Frontend Development",
      description:
        "Creating visually appealing interfaces using HTML, CSS, JavaScript, and React."
    },

    {
      id: "local3",
      title: "HTML & CSS",
      description:
        "Writing clean, structured markup and styling layouts with attention to design and usability."
    },

    {
      id: "local4",
      title: "JavaScript Programming",
      description:
        "Implementing interactive features and handling logic using JavaScript."
    },

    {
      id: "local5",
      title: "Database Design",
      description:
        "Designing and understanding relational databases and basic data modeling concepts."
    },

    {
      id: "local6",
      title: "Unix / Linux Fundamentals",
      description:
        "Understanding basic command-line operations and system concepts in Unix/Linux environments."
    }

  ];


  const loadServices = () => {

    const savedServices =
      JSON.parse(localStorage.getItem("services")) || [];

    setServices([

      ...defaultServices,

      ...savedServices

    ]);

  };


  useEffect(() => {

    loadServices();

  }, []);



  const deleteService = (id) => {

    const updatedServices =
      services.filter(service => service.id !== id);

    const localOnly =
      updatedServices.filter(service =>
        service.id.toString().length > 10
      );

    localStorage.setItem(

      "services",

      JSON.stringify(localOnly)

    );

    alert("Service deleted successfully");

    loadServices();

  };


  return (

    <main className="services-page">

      <section className="services-header">

        <h1>Services</h1>

        <p>

          These are the core services and skills I offer as a Software
          Engineering student and aspiring frontend developer.

        </p>

      </section>



      <section className="services-grid">

        {services.map((service) => (

          <div key={service.id} className="service-card">

            <h3>

              {service.title || service.name}

            </h3>


            <p>

              {service.description}

            </p>


            {service.id.toString().length > 10 && (

              <>

                <Link to={`/edit-service/${service.id}`}>

                  <button>Edit</button>

                </Link>


                <button
                  onClick={() => deleteService(service.id)}
                >

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