// components/AboutMe.js
import React from 'react';
import { motion } from "framer-motion";
import { techStack } from "../constants/Constants";

function AboutMe({ id }) {
  
  return (
    <section id={id} style={{ padding: '70px' }}>
      <h2>
        About Me
      </h2>
      <div>
        <motion.div>
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-6">
                <h4 style={{ color: 'rgb(59, 130, 246, 1)' }}>
                  A bit about me
                </h4>
                <p>
                  I'm a self-taught web developer and Mobile App Developer with
                  experience in designing new features from ideation to production,
                  implementation of wireframes and design flows into high
                  performance software applications. I take into consideration the
                  user experience while writing reusable and efficient code. I
                  passionately combine good design, technology, and innovation in
                  all my projects, which I like to accompany from the first idea to
                  release.Currently, I'm focused on the backend development.
                </p>
              </div>
              <div className='col-md-6'>
                <h4 style={{ color: 'rgb(59, 130, 246, 1)' }} className='text-left'>
                  Technologies and Tools
                </h4>
                <p>
                  Using a combination of cutting-edge technologies and reliable
                  open-source software I build user-focused, performant apps and
                  websites for smartphones, tablets, and desktops.
                </p>
              </div>
            </div>
          </div>

        </motion.div>

        <motion.div className="container-fluid d-flex flex-wrap justify-content-center align-items-center" style={{ height: '100vh', gap: '20px', overflow: 'hidden' }}>
          {techStack.map((el, index) => (
            <motion.div
              initial="hidden"
              whileInView={"visible"}
              variants={{
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                  },
                },
                hidden: { opacity: 1, y: 80 },
              }}
            >
              <div className="rectangle bg-light d-flex align-items-center p-3" style={{ width: '300px', height: '80px' }}>
                <img alt="Language Icon" src={el.link} className="me-3 img-fluid" style={{ width: '60px', height: 'auto' }} />
                <h4 className="text-md ml-4">{el.name}</h4>
              </div>
              {/* <div className='box'>
                <img alt="" src={el.link} className="w-12" />
                <h4 className="text-md ml-4">{el.name}</h4>
              </div> */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default AboutMe;
