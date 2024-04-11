import React from 'react';
import Card from '../components/Card';
import '../styles.css'; // Import the Home styles

function Projects({ id }) {

  return (
    <section id={id}>
      <div className="container">
      <h2>Projects</h2>
        {/* <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
          <div className='col'>
            <Card
              title="Project 1"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam viverra ipsum nec finibus. Cras ut purus a libero vehicula tristique."
              maxContentLength={100}
            />
          </div>
          <div className='col'>
            <Card
              title="Project 2"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam viverra ipsum nec finibus. Cras ut purus a libero vehicula tristique."
              maxContentLength={100}
            />
          </div>
          <div className='col'>
            <Card
              title="Project 3"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam viverra ipsum nec finibus. Cras ut purus a libero vehicula tristique."
              maxContentLength={100}
            />
          </div>
          <div className='col'>
            <Card
              title="Project 4"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam viverra ipsum nec finibus. Cras ut purus a libero vehicula tristique."
              maxContentLength={100}
            />
          </div>
          <div className='col'>
            <Card
              title="Project 5"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam viverra ipsum nec finibus. Cras ut purus a libero vehicula tristique."
              maxContentLength={100}
            />
          </div>
          <div className='col'>
            <Card
              title="Project 6"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam viverra ipsum nec finibus. Cras ut purus a libero vehicula tristique."
              maxContentLength={100}
            />
          </div>
        </div> */}
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 d-flex">
            <div style={{ marginTop: '50px' }}>
              <h4 style={{ color: 'rgb(59, 130, 246, 1)' }} className="mb-4">Role and Responsibilities</h4>
              <div className="role-responsibilities">
                <p>
                  As a SharePoint Developer and Administrator, I was responsible for designing, developing, and maintaining SharePoint sites, workflows, and custom solutions. I collaborated closely with stakeholders to gather requirements, assess feasibility, and implement solutions aligned with business objectives.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <div style={{ marginTop: '50px' }}>
              <h4 style={{ color: 'rgb(59, 130, 246, 1)' }} className="mb-4">Technologies Used</h4>
              <div className="technologies-used">
                <ul className="list-unstyled">
                  <li>
                    <span className="badge bg-primary me-2">SharePoint Online (Office 365)</span>
                    <small className="text-muted">Cloud-based collaboration platform</small>
                  </li>
                  <li>
                    <span className="badge bg-primary me-2">SharePoint Designer</span>
                    <small className="text-muted">Tool for customizing SharePoint sites</small>
                  </li>
                  <li>
                    <span className="badge bg-primary me-2">Power Automate (formerly Microsoft Flow)</span>
                    <small className="text-muted">Workflow automation service</small>
                  </li>
                  <li>
                    <span className="badge bg-primary me-2">Power Apps</span>
                    <small className="text-muted">Low-code app development platform</small>
                  </li>
                  <li>
                    <span className="badge bg-primary me-2">SharePoint Framework (SPFx)</span>
                    <small className="text-muted">Framework for building SharePoint apps</small>
                  </li>
                  <li>
                    <span className="badge bg-primary me-2">Microsoft Azure</span>
                    <small className="text-muted">Cloud computing service for integration and authentication</small>
                  </li>
                  <li>
                    <span className="badge bg-primary me-2">JavaScript (JS)</span>
                    <small className="text-muted">Scripting language for web development</small>
                  </li>
                  <li>
                    <span className="badge bg-primary me-2">TypeScript</span>
                    <small className="text-muted">Typed superset of JavaScript</small>
                  </li>
                  <li>
                    <span className="badge bg-primary me-2">C#</span>
                    <small className="text-muted">Object-oriented programming language</small>
                  </li>
                  <li>
                    <span className="badge bg-primary me-2">.NET</span>
                    <small className="text-muted">Framework for building Windows and web applications</small>
                  </li>
                  <li>
                    <span className="badge bg-primary me-2">Node.js</span>
                    <small className="text-muted">JavaScript runtime for server-side development</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;