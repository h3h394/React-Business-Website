/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from "../GlobalComponents/Container";
import Info from "../GlobalComponents/Info";
import DesignCard from "../Design/DesignCard";
import FeatureIcon from "../img/featureIcon.webp";
import FeatureIconTwo from "../img/featureIconTwo.webp";
import FeatureIconThree from "../img/featureIconThree.webp";
import FeatureIconFour from "../img/featureIconFour.webp";
import FeatureIconFive from "../img/featureIconFive.webp";
import FeatureIconSix from "../img/featureIconSix.webp";

const Features = () => (
  <section css={styles} className="features">
    <Info infoTitle="SPECIAL FEATURES" />
    <Container>
      <DesignCard cardImg={FeatureIcon} cardTitle="Creative Design" />
      <DesignCard cardImg={FeatureIconTwo} cardTitle="Unlimited Features" />
      <DesignCard cardImg={FeatureIconThree} cardTitle="Full Free Chat" />
      <DesignCard cardImg={FeatureIconFour} cardTitle="Retina ready" />
      <DesignCard cardImg={FeatureIconFive} cardTitle="High Resolution" />
      <DesignCard cardImg={FeatureIconSix} cardTitle="Clean Codes" />
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  padding: 120px 0;
  background: #f2fefe;
  .container {
    padding: 60px 0 0 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .designCard {
      padding: 40px 36px;
    }
  }
`;

export default Features;
