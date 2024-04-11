import React from 'react';
import { motion } from "framer-motion";
import { techStack } from "../constants/Constants";

function AboutMe({ id }) {

  return (
    <section id={id} className='mt-5'>
      <div className="container">
        <h2>About Me</h2>
        <div className="row mt-5">
          <div className="col-lg-6">
            <h4 style={{ color: 'rgb(59, 130, 246, 1)' }}>A bit about me</h4>
            <p>
              I'm a self-taught web developer and Mobile App Developer with
              experience in designing new features from ideation to production,
              implementation of wireframes and design flows into high
              performance software applications. I take into consideration the
              user experience while writing reusable and efficient code. I
              passionately combine good design, technology, and innovation in
              all my projects, which I like to accompany from the first idea to
              release.Currently, I'm focused on backend development.
            </p>
          </div>
          <div className='col-lg-6'>
            <h4 style={{ color: 'rgb(59, 130, 246, 1)' }}>Technologies and Tools</h4>
            <p>
              Using a combination of cutting-edge technologies and reliable
              open-source software I build user-focused, performant apps and
              websites for smartphones, tablets, and desktops.
            </p>
          </div>
        </div>

        <div className="row mt-5">
          {techStack.map((el, index) => (
            <motion.div
              key={index}
              className="col-lg-3 col-md-4 col-sm-6 mb-4"
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
              <div className="rectangle bg-light d-flex align-items-center p-3">
                <img alt="Language Icon" src={el.link} className="me-3 img-fluid" style={{ width: '60px', height: 'auto' }} />
                <h4 className="text-md ml-4">{el.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutMe;