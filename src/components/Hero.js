import React from "react";
import image from "./hero-image.png";

export default function Hero() {
  return (
    <section className="hero-section">
      <img src={image} alt="hero-main" />
      <h1>Online Experience</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
