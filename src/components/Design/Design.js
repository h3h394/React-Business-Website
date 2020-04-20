/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from "../GlobalComponents/Container";
import DesignCard from "./DesignCard";
import icon from "../img/service-icon-1.webp";
import iconTwo from "../img/service-icon-2.webp";
import iconThree from "../img/service-icon-3.webp";

const Design = () => (
  <div css={styles} className="design">
    <Container>
      <DesignCard cardImg={icon} cardTitle="EASY TO USE" />
      <DesignCard cardImg={iconTwo} cardTitle="AWESOME DESIGN" />
      <DesignCard cardImg={iconThree} cardTitle="EASY TO CUSTOMIZE" />
    </Container>
  </div>
);

const styles = css`
  width: 100%;
  padding: 120px 0;
  background: #f2fefe;
  .container {
    display: flex;
    justify-content: space-between;
  }
`;

export default Design;
