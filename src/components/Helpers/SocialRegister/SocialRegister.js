import "./Style.css";
import Google from "../../../assets/icons/GoogleCircleFilled.png";
import Windows from "../../../assets/icons/WindowsFilled.png";
import Apple from "../../../assets/icons/AppleOutlined.png";

export default function SocialRegister() {
  return (
    <section className="social-register">
      <span className="or">OR</span>
      <section className="links">
        <div className="link google">
          <img src={Google} alt="" className="icon" />
        </div>
        <div className="link windows">
          <img src={Windows} alt="" className="icon" />
        </div>
        <div className="link apple">
          <img src={Apple} alt="" className="icon" />
        </div>
      </section>
    </section>
  );
}
