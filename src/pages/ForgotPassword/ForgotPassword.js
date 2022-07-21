import React from "react";
import "../SignUp/SignUp.css";
import HeltLogo from "../../assets/images/HeltLogo.png";
import FormInput from "../../components/Helpers/FormInput/FormInput";
import Button from "../../components/Helpers/Button/Button";

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
    event.preventDefault();
  }
  return (
    <section className="form">
      <div className="form-content">
        <div className="logo">
          <a href="/">
            <img src={HeltLogo} alt="" />
          </a>
        </div>
        <h1 className="register-heading">Reset Password</h1>

        <form onSubmit={handleSubmit} className="signup-form">
          {ResetInputs}
          <div className="ctas">
            <Button content="Reset Password" />
          </div>
        </form>
      </div>
    </section>
  );
}
