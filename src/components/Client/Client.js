/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Slider from "infinite-react-carousel";
import Overlay from "./Overlay";
import Info from "../GlobalComponents/Info";
import Container from "../GlobalComponents/Container";
import ClientCard from "./ClientCard";
import ClientBg from "../img/clientBg.webp";
import ClientOneBg from "../img/clientOne.png";
import ClientTwoBg from "../img/clientTwo.webp";
import ClientThreeBg from "../img/clientThree.png";
import ClientFourBg from "../img/clientFour.webp";
import ClientFiveBg from "../img/clientFive.webp";
import ClientSixBg from "../img/clientSix.webp";
import LeftArrowIcon from "../img/leftArrow.png";
import RightArrowIcon from "../img/rightArrow.png";

const Client = ({ clientImg, clientName }) => {
  return (
    <div css={styles} className="client">
      <Overlay />
      <Info infoTitle="CLIENT SAYS" />
      <Container>
        <Slider autoplay autoplaySpeed={2000}>
          <ClientCard clientImg={ClientOneBg} />
          <ClientCard clientImg={ClientTwoBg} />
          <ClientCard clientImg={ClientThreeBg} />
          <ClientCard clientImg={ClientFourBg} />
          <ClientCard clientImg={ClientFiveBg} />
          <ClientCard clientImg={ClientSixBg} />
        </Slider>
      </Container>
    </div>
  );
};

const styles = css`
  width: 100%;
  padding: 120px 0;
  position: relative;
  background: url('${ClientBg}') no-repeat center/cover;
  background-attachment: fixed;
  text-align: center;
  .info {
    color: #fff;
    position: relative;
  }
  .container {
    max-width: 800px;
    padding: 80px 0 0 0;
    .carousel-initialized,
    .carousel-initialized.scrolling .carousel-track {
      height: 340px;
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

export default Client;
