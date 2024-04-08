import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import { contactLinks } from '../constants/Constants';
import emailjs from 'emailjs-com';

function Contact({id}) {
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send('service_50vffqo', 'template_j5ronbj', {
        from_email: 'suyashkulkarni43@gmail.com', // Specify the sender's email address here
        to_email: email, // Specify the recipient's email address here
        subject: subject,
        message: message
      }, 'CH7OB0_JwoOKirHCH');
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Email sending failed:', error);
      alert('Failed to send email. Please try again later.');
    }
  };

  return (
    <section id={id} style={{ padding: '70px', height: '100vh' }}>
      <h1>Contact</h1>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <form className="needs-validation" noValidate onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="sender_email" className="form-label float-start">Email</label>
                <input type="email" className="form-control" id="sender_email" placeholder="Enter your email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <div className="invalid-feedback">
                  Please enter a valid email address.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label float-start">Subject</label>
                <input type="text" className="form-control" id="subject" placeholder="Enter subject" required value={subject} onChange={(e) => setSubject(e.target.value)} />
                <div className="invalid-feedback">
                  Please enter a subject.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label float-start">Message</label>
                <textarea className="form-control" id="message" rows="5" placeholder="Enter message" required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                <div className="invalid-feedback">
                  Please enter a message.
                </div>
              </div>
              <button type="submit" className="btn btn-primary float-md-end">Submit</button>
            </form>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="text-center text-md-end">
              {/* <hr className="d-md-none" />
              <p><FontAwesomeIcon icon={faPhone} /> Phone: +1234567890</p>
              <p><FontAwesomeIcon icon={faEnvelope} /> Email: example@example.com</p>
              <p><FontAwesomeIcon icon={faMapMarker} /> Address: 123 Street, City, Country</p>
              <h1 className="mt-4 mb-4">Social</h1>
              <div className="d-flex flex-wrap">
                {contactLinks.map((el, index) => (
                  <a href={el.link} key={index} className={"me-md-6 me-4 cursor-pointer mt-4 hover:scale-125"}>
                    <img src={el.url} alt="" />
                  </a>
                ))}
              </div> */}
              <h3 className="mb-4">Email</h3>
              <a href="mailto:suyashkulkarni43@gmail.com" className="font-weight-bold text-blue-700 d-block text-decoration-none"><FontAwesomeIcon icon={faEnvelope} />&nbsp;suyashkulkarni43@gmail.com</a>
              <h3 className="mt-4 mb-4">Address</h3>
              <p className="font-weight-bold text-blue-700 d-block">
              <FontAwesomeIcon icon={faMapLocationDot} className="text-danger"/> 45 SilverStoner dr., Etobicoke <br />
                Canada, On
              </p>
              <h3 className="mt-4 mb-4">Social</h3>
              <ul className="list-unstyled d-flex flex-wrap justify-content-end">
                {contactLinks.map((el, index) => (
                  <li key={index} className="mx-4 my-4">
                    <a href={el.link} className="d-block text-black">
                      <img src={el.url} alt="" className="img-fluid hover-scale-125" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
