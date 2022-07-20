import ImageBox from "../Helpers/ImageBox/ImageBox";
import FeatureImgs from "../../Data/FeatureImgs";
import List from "../Helpers/List/List";
import "./feature.css";

export default function Feature() {
  //Images for Features
  const DataItem = FeatureImgs.map((image) => (
    <ImageBox
      name="feature-box"
      key={image.id}
      src={require("../../assets/images/" + image.image + ".png")}
      alt={image.title}
    />
  ));

  return (
    <section className="feature">
      <section className="feature-images">{DataItem}</section>
      <section className="features-item">
        <h2 className="feature-heading">Easy and Simple Features</h2>
        <span className="feature-list">Built for techies and non-techies</span>
        <ul className="feature-list">
          <List content="Easy Sign Up" />
          <List content="Symptom & Diagnosis" />
          <List content="Premium Vital Checks" />
          <List content="Professional Medical Advice" />
        </ul>
      </section>
    </section>
  );
}
