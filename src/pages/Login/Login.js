import "../SignUp/SignUp.css";
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
];

export default function Login() {
  const LoginInputs = inputs.map((input) => (
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
        <h1 className="register-heading">Login</h1>

        <form onSubmit={handleSubmit} className="signup-form">
          {LoginInputs}
          <div className="ctas">
            <Button content="Login" />
            <a href="/forgot-password">Forget Password ?</a>
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
