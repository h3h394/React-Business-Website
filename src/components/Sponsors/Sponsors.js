/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Slider from "infinite-react-carousel";
import SponsorsOverlay from "./SponsorsOverlay";
import Container from "../GlobalComponents/Container";
import SponsorsBg from "../img/parallax-2.webp";
import SponsorsImg from "./SponsorsImg";
import RightArrowIcon from '../img/rightArrow.png';
import LeftArrowIcon from '../img/leftArrow.png';
import GifOne from "../img/gifOne.gif";
import GifTwo from "../img/gifTwo.gif";
import GifThree from "../img/gifThree.gif";
import GifFour from "../img/gifFour.gif";
import GifFive from "../img/gifFive.gif";
import GifSix from "../img/gifSix.gif";
import GifSeven from "../img/gifSeven.gif";
import GifEight from "../img/gifEight.gif";

const Sponsors = () => (
  <section css={styles} className="sponsors">
    <SponsorsOverlay />
    <Container>
      <Slider
        autoplay
        autoplaySpeed={2000}
        slidesToShow={5}
        centerPadding="0"
        centerMode={true}
      >
        <SponsorsImg img={GifOne} />
        <SponsorsImg img={GifTwo} />
        <SponsorsImg img={GifThree} />
        <SponsorsImg img={GifFour} />
        <SponsorsImg img={GifFive} />
        <SponsorsImg img={GifSix} />
        <SponsorsImg img={GifSeven} />
        <SponsorsImg img={GifEight} />
      </Slider>
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  padding: 120px 0;
  background: url('${SponsorsBg}') no-repeat center/cover;
  position: relative;
  .container{
    position: relative;
    .carousel-initialized,
    .carousel-initialized.scrolling .carousel-track {
      height: 150px;
    }
    .carousel-arrow {
      width: 50%;
    }
    .carousel-arrow.block.carousel-next {
      color: #fff;
      position: absolute;
      &::before {
        background: url('${RightArrowIcon}') no-repeat center/cover;
        position: absolute;
        bottom: 4px;
        left: 26px;
        transform: translateX(-50%);
        width: 32px;
        height: 32px;
      }
    }
    .carousel-arrow.block.carousel-prev {
      color: #fff;
      position: absolute;
      &::before {
        background: url('${LeftArrowIcon}') no-repeat center/cover;
        position: absolute;
        bottom: 4px;
        right: 26px;
        width: 32px;
        height: 32px;
      }
    }
  }
`;

export default Sponsors;
