import "./SignUp.css";
import HeltLogo from "../../assets/images/HeltLogo.png";
import FormInput from "../../components/Helpers/FormInput/FormInput";
import Button from "../../components/Helpers/Button/Button";
import SocialRegister from "../../components/Helpers/SocialRegister/SocialRegister";

//define all signup inputs attributes
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
    label: "Password",
    placeholder: "Password",
    name: "password",
    type: "password",
    required: true,
  },
  {
    id: 3,
    label: "Confirm Password",
    placeholder: "Repeat Password",
    name: "password",
    type: "password",
    required: true,
  },
];

export default function SignUp() {
  const SignUpInputs = inputs.map((input) => (
    <FormInput key={input.id} {...input} />
  ));

  // Handle signup submit
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
