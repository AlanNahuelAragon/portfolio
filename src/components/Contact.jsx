import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-smash-img.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import { contactSchema } from "./Validations/ContactValidation";

export const Contact = () => {

  const PUBLIC_KEY= process.env.EMAILJS_PUBLIC_KEY;
  const TEMPLATE_ID= process.env.EMAILJS_TEMPLATE_ID;
  const SERVICE_ID= process.env.EMAILJS_SERVICE_ID;
  const formInitialDetails = {
    user_name: '',
    user_email: '',
    user_message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');

  const validateMessage = async (event) => {
    event.preventDefault();
    let formData = {
      name: event.target[0].value,
      email: event.target[1].value,
      message: event.target[2].value
    };
    console.log("Validando...");
    console.log(formData);

    const isValid = await contactSchema.isValid(formData)
    console.log(isValid);

    if (isValid) {
      setFormDetails({user_name:'',user_email:'',user_message:''});
      sendEmail(event);
    } else {
      Swal.fire({
        title: 'Nope!',
        text: 'No empty fields!',
        icon: 'info',
        confirmButtonText: 'okay'
      })
    }
  };

  const sendEmail = (event) => {
    event.preventDefault();
    setButtonText("Sending...");
    console.log(event.target)
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, event.target, PUBLIC_KEY)
      .then(response => {
        if (response.status === 200) {
          setTimeout(() => {
            Swal.fire({
              title: 'Success',
              text: 'Your message was sent succcessfully',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
            setButtonText("Send");
          }, 4000);

        }
      })
      .catch(error => {
        console.log(error)
        Swal.fire({
          title: 'Error',
          text: 'Ups, there is a issue',
          icon: 'error',
          confirmButtonText: 'Not Cool'
        })
        setButtonText("Send");
      });
  };


  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
}

  const showResults = (event) =>{//DEBUG
    event.preventDefault();
    console.log(event.target[0].value,event.target[1].value,event.target[2].value)
  }

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit={validateMessage}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type='text' name="user_name" value={formDetails.user_name} placeholder="My name is.." onChange={(e) => onFormUpdate('user_name', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type='email' name='user_email' value={formDetails.user_email} placeholder="Email Address" onChange={(e) => onFormUpdate('user_email', e.target.value)} />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" name="user_message" value={formDetails.user_message} placeholder="Message" onChange={(e) => onFormUpdate('user_message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}