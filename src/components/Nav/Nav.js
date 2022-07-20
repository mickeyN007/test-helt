import "./Nav.css";
import HeltLogo from "../../assets/images/HeltLogo.png";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <a href="/">
          <img src={HeltLogo} alt="" />
        </a>
      </div>
      <div className="nav-item">
        <h4 className="nav-link"> Contact Us</h4>
      </div>
    </nav>
  );
}
