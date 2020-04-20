/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState } from "react";
import Container from "../GlobalComponents/Container";
import BuildInfo from "./BuildInfo";
import BuildImg from "./BuildImg";
import BottomNav from "./BottomNav";
import ScreenOneImg from "../img/screen-1.webp";
import ScreenTwoImg from "../img/screen-2.webp";
import ScreenThreeImg from "../img/screen-3.webp";
import ScreenFourImg from "../img/screen-4.webp";
import ScreenSixImg from "../img/screen-6.webp";

const Build = () => {
  const [hidden, setHidden] = useState(false);
  const [activeLink, setActiveLink] = useState("first");
  const handleActive = (type) => {
    if (type === "first") {
      setActiveLink("first");
    } else if (type === "second") {
      setActiveLink("second");
    } else if (type === "third") {
      setActiveLink("third");
    } else if (type === "fourth") {
      setActiveLink("fourth");
    }
  };

  return (
    <div css={styles} className="build">
      <div className="wrapper">
        {activeLink === "first" && (
          <Container hidden={hidden} setHidden={setHidden}>
            <BuildInfo buildTitle="Easy to build" />
            <BuildImg img={ScreenOneImg} imgTwo={ScreenTwoImg} />
          </Container>
        )}
        {activeLink === "second" && (
          <Container hidden={hidden} setHidden={setHidden}>
            <BuildInfo buildTitle="Easy to use" />
            <BuildImg img={ScreenThreeImg} imgTwo={ScreenFourImg} />
          </Container>
        )}
        {activeLink === "third" && (
          <Container hidden={hidden} setHidden={setHidden}>
            <BuildInfo buildTitle="Easy to customize" />
            <BuildImg img={ScreenSixImg} imgTwo={ScreenTwoImg} />
          </Container>
        )}
        {activeLink === "fourth" && (
          <Container hidden={hidden} setHidden={setHidden}>
            <BuildInfo buildTitle="Awesome design" />
            <BuildImg img={ScreenThreeImg} imgTwo={ScreenFourImg} />
          </Container>
        )}
      </div>
      <BottomNav
        handleActive={handleActive}
        activeLink={activeLink}
        setHidden={setHidden}
      />
    </div>
  );
};

const styles = css`
  width: 100%;
  padding: 120px 0;
  background: linear-gradient(to bottom, #75cbe7 0%, #138fc2 100%);
  .wrapper {
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
    overflow: hidden;
    .container {
      padding: 40px 0;
      display: flex;
      justify-content: space-between;
      opacity: 1;
      &.hidden {
        animation: toggle 1600ms ease-in-out;
        transform: translateX(0px);
      }
    }
  }
  @keyframes toggle {
    0% {
      opacity: 0;
      transform: translateX(1150px);
    }
    25% {
      opacity: 0.3;
    }
    50% {
      opacity: 0.7;
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`;

export default Build;
