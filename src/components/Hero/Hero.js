import "./hero.css";
import React from "react";
import Link from "../Helpers/Link/Link";
import ImageBox from "../Helpers/ImageBox/ImageBox";
import HeroImgs from "../../Data/HeroImgs";

export default function Hero() {
  //Images for hero
  const DataItem = HeroImgs.map((image) => (
    <ImageBox
      name="hero-box"
      key={image.id}
      src={require("../../assets/images/" + image.image + ".png")}
      alt={image.title}
    />
  ));

  return (
    <section className="hero">
      <section className="hero-text">
        <h1 className="main-heading">
          Diagnose your Symptoms and Vitals within minutes from your phone
        </h1>
        <p className="main-paragraph">
          Your symptoms and vitals are used to diagnosed an accurate medical
          condition and proven remedies are prescibed from professionals in the
          field.
        </p>
        <Link content="Get Started For Free" />
      </section>
      <section className="hero-images">{DataItem}</section>
    </section>
  );
}
