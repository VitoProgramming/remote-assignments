import { useState } from "react";

function Hero() {
  const [heroText, setHeroText] = useState("Welcome Message");

  function handleClick() {
    setHeroText("Have a Good Time!");
  }

  return (
    <section className="main-header__hero" onClick={handleClick}>
      <h1 className="hero__title">{heroText}</h1>
    </section>
  );
}

export default Hero;
