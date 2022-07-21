import React from "react";
import "./Nav.css";
import HeltLogo from "../../assets/images/HeltLogo.png";
import Modal from "../Helpers/Modal/Modal";
import FormInput from "../Helpers/FormInput/FormInput";
import TextArea from "../Helpers/TextArea/TextArea";
import Button from "../Helpers/Button/Button";

//define contact form inputs
const inputs = [
  {
    id: 1,
    label: "Email",
    placeholder: "Please Enter your Email",
    name: "email",
    type: "email",
    required: true,
  },
  {
    id: 2,
    label: "Subject",
    placeholder: "Subject",
    name: "subject",
    type: "text",
    required: true,
  },
];
const textArea = [
  {
    id: 1,
    label: "Message",
    placeholder: "Message",
    name: "message",
    required: true,
  },
];

export default function Nav() {
  //handle state of form
  const [contactValue, setContactValue] = React.useState({
    email: "",
    subject: "",
    message: "",
  });

  //handle form change
  function handleChange(event) {
    const { name, value } = event.target;
    setContactValue((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  //iterate form inputs
  const ContacInputs = inputs.map((input) => (
    <FormInput
      key={input.id}
      {...input}
      value={contactValue[input.name]}
      handleChange={handleChange}
    />
  ));

  //iterate text area
  const ContactMessage = textArea.map((input) => (
    <TextArea
      key={input.id}
      {...input}
      value={contactValue[input.name]}
      handleChange={handleChange}
    />
  ));

  //modal show and hide state
  const [show, setShow] = React.useState(false);

  //handle submitted state
  const [submitted, setSubmitted] = React.useState(false);

  function handleShow() {
    setShow((prevShow) => !prevShow);
    setSubmitted(false);
  }

  //handle Contact Modal
  function handleSubmit(event) {
    setSubmitted(true);
    setContactValue((prevValue) => {
      return {
        ...prevValue,
        email: "",
        subject: "",
        message: "",
      };
    });
    event.preventDefault();
  }

  return (
    <>
      <Modal
        title={submitted === true ? "Message" : "Contact Form"}
        onClose={handleShow}
        show={show}
      >
        {submitted === true && (
          <div className="message">
            <p>Success</p>
          </div>
        )}
        {submitted === false && (
          <form onSubmit={handleSubmit}>
            {ContacInputs}
            {ContactMessage}
            <Button content="submit" />
          </form>
        )}
      </Modal>
      <nav className="nav">
        <div className="nav-logo">
          <a href="/">
            <img src={HeltLogo} alt="" />
          </a>
        </div>
        <div className="nav-item">
          <h4 className="nav-link" onClick={handleShow}>
            Contact Us
          </h4>
        </div>
      </nav>
    </>
  );
}
