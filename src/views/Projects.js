// views/Projects.js
import React, { useState } from 'react';
import Card from '../components/Card';

function Projects({ id }) {


  return (
    <>
      <section id={id} style={{ padding: '70px' }}>
        <h2>Projects</h2>
        {/* List of projects */}
        <div className="container">
          <div className="row">
            <div className='col-md-4'>
              <Card
                title="Overview"
                content="I had the privilege of being part of a dynamic team tasked with implementing a comprehensive SharePoint solution for a leading multinational corporation over a period of two years. The project aimed to streamline internal collaboration, document management, and business processes across various departments and geographic locations."
                maxContentLength={100} // Maximum length of content to display before truncating
              />
              <Card
                title="Overview"
                content="I had the privilege of being part of a dynamic team tasked with implementing a comprehensive SharePoint solution for a leading multinational corporation over a period of two years. The project aimed to streamline internal collaboration, document management, and business processes across various departments and geographic locations."
                maxContentLength={100} // Maximum length of content to display before truncating
              />
              <Card
                title="Overview"
                content="I had the privilege of being part of a dynamic team tasked with implementing a comprehensive SharePoint solution for a leading multinational corporation over a period of two years. The project aimed to streamline internal collaboration, document management, and business processes across various departments and geographic locations."
                maxContentLength={100} // Maximum length of content to display before truncating
              />
              <Card
                title="Overview"
                content="I had the privilege of being part of a dynamic team tasked with implementing a comprehensive SharePoint solution for a leading multinational corporation over a period of two years. The project aimed to streamline internal collaboration, document management, and business processes across various departments and geographic locations."
                maxContentLength={100} // Maximum length of content to display before truncating
              />
              <Card
                title="Overview"
                content="I had the privilege of being part of a dynamic team tasked with implementing a comprehensive SharePoint solution for a leading multinational corporation over a period of two years. The project aimed to streamline internal collaboration, document management, and business processes across various departments and geographic locations."
                maxContentLength={100} // Maximum length of content to display before truncating
              />
              <Card
                title="Overview"
                content="I had the privilege of being part of a dynamic team tasked with implementing a comprehensive SharePoint solution for a leading multinational corporation over a period of two years. The project aimed to streamline internal collaboration, document management, and business processes across various departments and geographic locations."
                maxContentLength={100} // Maximum length of content to display before truncating
              />
              <Card
                title="Overview"
                content="I had the privilege of being part of a dynamic team tasked with implementing a comprehensive SharePoint solution for a leading multinational corporation over a period of two years. The project aimed to streamline internal collaboration, document management, and business processes across various departments and geographic locations."
                maxContentLength={100} // Maximum length of content to display before truncating
              />
              <Card
                title="Overview"
                content="I had the privilege of being part of a dynamic team tasked with implementing a comprehensive SharePoint solution for a leading multinational corporation over a period of two years. The project aimed to streamline internal collaboration, document management, and business processes across various departments and geographic locations."
                maxContentLength={100} // Maximum length of content to display before truncating
              />
              <Card
                title="Overview"
                content="I had the privilege of being part of a dynamic team tasked with implementing a comprehensive SharePoint solution for a leading multinational corporation over a period of two years. The project aimed to streamline internal collaboration, document management, and business processes across various departments and geographic locations."
                maxContentLength={100} // Maximum length of content to display before truncating
              />
              <Card
                title="Overview"
                content="I had the privilege of being part of a dynamic team tasked with implementing a comprehensive SharePoint solution for a leading multinational corporation over a period of two years. The project aimed to streamline internal collaboration, document management, and business processes across various departments and geographic locations."
                maxContentLength={100} // Maximum length of content to display before truncating
              />
              <Card
                title="Overview"
                content="I had the privilege of being part of a dynamic team tasked with implementing a comprehensive SharePoint solution for a leading multinational corporation over a period of two years. The project aimed to streamline internal collaboration, document management, and business processes across various departments and geographic locations."
                maxContentLength={100} // Maximum length of content to display before truncating
              />
              <Card
                title="Overview"
                content="I had the privilege of being part of a dynamic team tasked with implementing a comprehensive SharePoint solution for a leading multinational corporation over a period of two years. The project aimed to streamline internal collaboration, document management, and business processes across various departments and geographic locations."
                maxContentLength={100} // Maximum length of content to display before truncating
              />
              <Card
                title="Overview"
                content="I had the privilege of being part of a dynamic team tasked with implementing a comprehensive SharePoint solution for a leading multinational corporation over a period of two years. The project aimed to streamline internal collaboration, document management, and business processes across various departments and geographic locations."
                maxContentLength={100} // Maximum length of content to display before truncating
              />
              <Card
                title="Overview"
                content="I had the privilege of being part of a dynamic team tasked with implementing a comprehensive SharePoint solution for a leading multinational corporation over a period of two years. The project aimed to streamline internal collaboration, document management, and business processes across various departments and geographic locations."
                maxContentLength={100} // Maximum length of content to display before truncating
              />
              <Card
                title="Overview"
                content="I had the privilege of being part of a dynamic team tasked with implementing a comprehensive SharePoint solution for a leading multinational corporation over a period of two years. The project aimed to streamline internal collaboration, document management, and business processes across various departments and geographic locations."
                maxContentLength={100} // Maximum length of content to display before truncating
              />
            </div>
          </div>
        </div>
        <div>
          <h4>Role and Responsibilities:</h4>
          As a SharePoint Developer and Administrator, my responsibilities encompassed the design, development, and maintenance of SharePoint sites, workflows, and custom solutions tailored to the client's specific needs. I collaborated closely with stakeholders to gather requirements, assess feasibility, and implement solutions aligned with business objectives.
        </div>
        <div>
          Technologies Used:
          <ul>
            <li>SharePoint Online (Office 365)</li>
            <li>SharePoint Designer</li>
            <li>Power Automate (formerly Microsoft Flow)</li>
            <li>Power Apps</li>
            <li>SharePoint Framework (SPFx)</li>
            <li>Microsoft Azure (for integration and authentication)</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Projects;