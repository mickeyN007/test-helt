import "./Network.css";
import Link from "../Helpers/Link/Link";
import NetworkImg from "../../assets/bgSvg/Network.svg";

export default function Network() {
  return (
    <section className="network">
      <section className="network-images">
        <img src={NetworkImg} alt="" />
      </section>
      <section className="network-content">
        <h3 className="network-heading">
          Join our network and get better care
        </h3>
        <Link content="Get Started For Free" />
      </section>
    </section>
  );
}
