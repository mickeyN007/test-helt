import React from "react";
import "../SignUp/SignUp.css";
import HeltLogo from "../../assets/images/HeltLogo.png";
import FormInput from "../../components/Helpers/FormInput/FormInput";
import Button from "../../components/Helpers/Button/Button";
import Modal from "../../components/Helpers/Modal/Modal";

//define all forgot pswd inputs attributes
const inputs = [
  {
    id: 1,
    label: "Email",
    placeholder: "Please Enter your Email",
    name: "email",
    type: "email",
    required: true,
  },
];

export default function ForgotPassword() {
  //handle state of form
  const [resetValue, setResetValue] = React.useState({
    email: "",
  });

  //modal show and hide state
  const [show, setShow] = React.useState(false);

  //handle submitted state
  const [submitted, setSubmitted] = React.useState(false);

  function handleShow() {
    setShow((prevShow) => !prevShow);
  }

  //handle form change
  function handleChange(event) {
    const { name, value } = event.target;
    setResetValue((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  const ResetInputs = inputs.map((input) => (
    <FormInput
      key={input.id}
      {...input}
      value={resetValue[input.name]}
      handleChange={handleChange}
    />
  ));

  // Handle forgot pswd submit
  function handleSubmit(event) {
    setSubmitted(true);
    setShow(true);
    setResetValue((prevValue) => {
      return {
        ...prevValue,
        email: "",
      };
    });
    event.preventDefault();
  }
  return (
    <section className="form">
      <Modal title="Password reset" onClose={handleShow} show={show}>
        {submitted === true && (
          <div className="message">
            <p>
              A link has been sent to your email for you to reset your password
            </p>
          </div>
        )}
      </Modal>
      <div className="form-content">
        <div className="logo">
          <a href="/">
            <img src={HeltLogo} alt="" />
          </a>
        </div>
        <h1 className="register-heading mb">Reset Password</h1>

        {submitted === true && show === false ? (
          <a href="/Login" className="btn">
            Back to Login Page
          </a>
        ) : (
          <form onSubmit={handleSubmit} className="signup-form">
            {ResetInputs}
            <div className="ctas">
              <Button content="Reset Password" />
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
