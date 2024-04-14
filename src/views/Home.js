import React, { useState, useEffect } from 'react';
import '../styles.css'; // Import the Home styles
import { animated } from 'react-spring';
import profilePictureImg from '../assets/images/codingImg.svg';
import { useSpring } from 'react-spring';
import cloudDark from '../assets/images/cloudBg.png';

function Home({ id }) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const messages = [
      "Front End Developer",
      "Full Stack Developer",
      "SharePoint Developer"
    ];

    const interval = setInterval(() => {
      if (typing && index < messages[currentMessageIndex].length) {
        setText((prevText) => prevText + messages[currentMessageIndex][index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else if (!typing && index === 0) {
        setTimeout(() => {
          setTyping(true);
        }, 1000); // Delay before typing the next message
      } else if (!typing && index > 0) {
        setText((prevText) => prevText.slice(0, -1));
        setIndex((prevIndex) => prevIndex - 1);
      } else {
        setTyping(false);
        setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
      }
    }, 100); // Adjust typing speed as needed (e.g., 100ms for a faster typing effect)

    return () => clearInterval(interval);
  }, [index, currentMessageIndex, typing]);

  const animationProps = useSpring({
    from: { opacity: 0, transform: 'translateX(50px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { duration: 1000 },
  });

  return (
    <section className="home" id={id} style={{ backgroundImage: `url('${cloudDark}')`, backgroundSize: "cover", minHeight: "100vh" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-custom">
            <animated.div style={animationProps}>
              <span className="heading">Hi, I am Suyash</span>
              <span className={`${"typing-animation"} ${"subheading"}`}>{text}</span>
              <span>Experienced IT professional proficient in a spectrum of technologies including React.js, TypeScript, SharePoint SPFx, PowerShell, HTML, CSS, C#, and .NET. Skilled in crafting seamless, user-friendly web applications and leveraging SharePoint for optimized solutions. Passionate about continuous learning and staying updated with emerging tech trends. Ready to collaborate on projects that demand innovation and efficiency in the IT landscape.</span>
            </animated.div>
          </div>
          <div className="col-md-6">
            <animated.div style={animationProps}>
              <img src={profilePictureImg} alt="Your Name" className="img-fluid" />
            </animated.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;