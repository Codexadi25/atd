import React from 'react';
import "../styles/servicesComponent.css";
import { Link } from 'react-router-dom';

const services = [
   {
     title: "Website Development",
     description:
       "We design stunning, responsive websites tailored to your brand. Perfect for startups needing fast, reliable web presence.",
     points: [
       "Custom Design (No templates)",
       "Mobile-First & Responsive",
       "SEO Optimized",
       "Lightning-fast performance",
     ],
   },
   {
     title: "Web App Development",
     description:
       "Build powerful web applications with clean UI, secure backend, and scalable architecture.",
     points: [
       "Full MERN Stack Development",
       "Firebase & MongoDB Integration",
       "Admin Dashboards & Portals",
       "Authentication & Security",
     ],
   },
   {
     title: "Custom Software Solutions",
     description:
       "From idea to execution, we create software tailored to solve specific business challenges.",
     points: [
       "Python, C++, Node.js Backends",
       "Automation & DevOps Tools",
       "Desktop or Cloud Software",
       "Scalable & Maintainable Code",
     ],
   },
];

function ServiceComponent() {
  return (
   <div className='serviceDropdown'>
      <Link to='/services'>Services</Link>
      <div className="services-container">
        <div className="service-list">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.points.map((point, i) => (
                  <li key={i}>✔ {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
   </div>
  )
}

export default ServiceComponent