import React from "react";
import "./SignUp.css";
import HeltLogo from "../../assets/images/HeltLogo.png";
import FormInput from "../../components/Helpers/FormInput/FormInput";
import Button from "../../components/Helpers/Button/Button";
import SocialRegister from "../../components/Helpers/SocialRegister/SocialRegister";
import { useNavigate } from "react-router-dom";

//define all signup inputs attributes
const inputs = [
  {
    id: 1,
    label: "Email",
    placeholder: "Please Enter your Email",
    name: "email",
    type: "email",
    errorMessage: "it should be a valid email address!",
    required: true,
  },
  {
    id: 2,
    label: "Password",
    placeholder: "Password",
    name: "password",
    type: "password",
    errorMessage:
      "Password should be 8-10 characters and include at least, 1 number, 1 letter and 1 special character",
    required: true,
  },
  {
    id: 3,
    label: "Confirm Password",
    placeholder: "Repeat Password",
    name: "confirmPassword",
    type: "password",
    errorMessage: "Password does not match!",
    required: true,
  },
];

export default function SignUp() {
  //handle redirect
  const navigate = useNavigate();

  //handle state of form
  const [registerValue, setRegisterValue] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  //handle form change
  function handleChange(event) {
    const { name, value } = event.target;
    setRegisterValue((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  const SignUpInputs = inputs.map((input) => (
    <FormInput
      key={input.id}
      {...input}
      value={registerValue[input.name]}
      handleChange={handleChange}
    />
  ));

  // Handle signup submit
  function handleSubmit(event) {
    event.preventDefault();
    setRegisterValue((prevValue) => {
      return {
        ...prevValue,
        email: "",
        password: "",
        confirmPassword: "",
      };
    });

    //redirect to dashboard or login
    navigate("/login");
  }
  return (
    <section className="form">
      <div className="form-content">
        <div className="logo">
          <a href="/">
            <img src={HeltLogo} alt="" />
          </a>
        </div>
        <h1 className="register-heading">Sign Up</h1>

        <form onSubmit={handleSubmit} className="signup-form">
          {SignUpInputs}
          <Button content="Sign up" />
          <a href="./login">Login</a>
        </form>
        <SocialRegister />
      </div>
    </section>
  );
}
