/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState, useEffect } from "react";
import Overlay from "./Overlay";
import Container from "../GlobalComponents/Container";
import Info from "./Info";
import Showcase from "./Showcase";
import heroBg from "../img/parallax-2.webp";
import mobileScreen from "../img/screen-2.webp";
import mobileScreen2 from "../img/screen-4.webp";
import mobileScreen3 from "../img/screen-5.webp";

const Hero = () => {
  const [img, setImage] = useState(mobileScreen);
  const [count, setCount] = useState(0);
  const images = [mobileScreen, mobileScreen2, mobileScreen3];
  const nextBg = () => {
    if (count >= images.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
    setImage(images[count]);
  };

  const previousBg = () => {
    if (count === 0) {
      setCount(2);
    } else {
      setCount(count - 1);
    }
    setImage(images[count]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextBg();
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <section css={styles} className="hero">
      <Overlay />
      <Container>
        <Info />
        <Showcase img={img} previousBg={previousBg} nextBg={nextBg} />
      </Container>
    </section>
  );
};

const styles = css`
  width: 100%;
  min-height: 100vh;
  background: url('${heroBg}') no-repeat center center;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  .container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default Hero;
