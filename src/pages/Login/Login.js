import React from "react";
import "../SignUp/SignUp.css";
import HeltLogo from "../../assets/images/HeltLogo.png";
import FormInput from "../../components/Helpers/FormInput/FormInput";
import Button from "../../components/Helpers/Button/Button";
import SocialRegister from "../../components/Helpers/SocialRegister/SocialRegister";
import { useNavigate } from "react-router-dom";

//define all Login inputs attributes
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
    required: true,
  },
];

export default function Login() {
  //handle redirect
  const navigate = useNavigate();
  //handle state of form
  const [loginValue, setLoginValue] = React.useState({
    email: "",
    password: "",
  });

  //handle form change
  function handleChange(event) {
    const { name, value } = event.target;
    setLoginValue((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  const LoginInputs = inputs.map((input) => (
    <FormInput
      key={input.id}
      {...input}
      value={loginValue[input.name]}
      handleChange={handleChange}
    />
  ));

  // Handle Login submit
  function handleSubmit(event) {
    event.preventDefault();
    setLoginValue((prevValue) => {
      return {
        ...prevValue,
        email: "",
        password: "",
      };
    });
    //redirect to dashboard
    navigate("/");
  }
  return (
    <section className="form">
      <div className="form-content">
        <div className="logo">
          <a href="/">
            <img src={HeltLogo} alt="" />
          </a>
        </div>
        <h1 className="register-heading">Login</h1>

        <form onSubmit={handleSubmit} className="signup-form">
          {LoginInputs}
          <div className="ctas">
            <Button content="Login" />
            <a href="/forgetpassword">Forgot Password ?</a>
          </div>
        </form>
        <div className="signup-link tac">
          <a href="/signup" className="signup">
            Don’t have an account ? Sign Up
          </a>
        </div>
        <SocialRegister />
      </div>
    </section>
  );
}
