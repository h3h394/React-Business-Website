/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Info from "../GlobalComponents/Info";
import Container from "../GlobalComponents/Container";
import PricingCard from "./PricingCard";

const Pricing = () => (
  <section css={styles} className="pricing">
    <Info infoTitle="AFFORDABLE PRICE" />
    <Container>
      <PricingCard pricingTitle="BASIC" pricingTag="$20" />
      <PricingCard pricingTitle="STANDARD" pricingTag="$39" />
      <PricingCard pricingTitle="UNLIMITED" pricingTag="$59" />
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  padding: 120px 0;
  background: #56a9c6;
  .info {
    color: #fff;
  }
  .container {
    display: flex;
    justify-content: space-between;
    padding: 80px 0 0 0;
  }
`;

export default Pricing;
