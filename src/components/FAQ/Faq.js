/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Info from "../GlobalComponents/Info";
import Container from "../GlobalComponents/Container";
import Row from "./Row";

const Faq = () => {
  return (
    <section css={styles} className="faq">
      <Info infoTitle="FREQUENTLY ASKED QUESTIONS" />
      <Container>
        <Row rowTitle="Sedeiusmod tempor inccsetetur aliquatraiy?" />
        <Row rowTitle="Tempor inccsetetur aliquatraiy?" />
        <Row rowTitle="Lorem ipsum dolor amet, consectetur adipisicing ?" />
        <Row rowTitle="Lorem ipsum dolor amet, consectetur adipisicing ?" />
      </Container>
    </section>
  );
};

const styles = css`
  width: 100%;
  padding: 120px 0;
  background: #f2fefe;
  .container {
    max-width: 800px;
    padding: 60px 0;
  }
`;

export default Faq;
