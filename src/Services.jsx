import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "./api/api";

export default function Services() {

  const [services, setServices] = useState([]);

  // your original services
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

    API.get("/services")

      .then((res) => {

        setServices([

          ...defaultServices,

          ...res.data.data

        ]);

      })

      .catch(() => {

        setServices(defaultServices);

      });

  };


  useEffect(() => {

    loadServices();

  }, []);



  const deleteService = async (id) => {

    await API.delete(`/services/${id}`);

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


            {/* show buttons only for database services */}

            {service.id.length > 10 && (

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