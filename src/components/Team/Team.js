/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Info from "../GlobalComponents/Info";
import Container from "../GlobalComponents/Container";
import TeamCard from "./TeamCard";
import TeamOneImg from "../img/teamOne.webp";
import TeamTwoImg from "../img/teamTwo.webp";
import TeamThreeImg from "../img/teamThree.webp";
import TeamFourImg from "../img/teamFour.webp";

const Team = () => (
  <section css={styles} className="team">
    <Info infoTitle="SPECIAL TEAM" />
    <Container>
      <TeamCard
        teamTitle="JEMY SEDONCE"
        teamPosition="Co.Founder"
        teamImg={TeamOneImg}
      />
      <TeamCard
        teamTitle="DEBORAH BROWN"
        teamPosition="UX Designer"
        teamImg={TeamTwoImg}
      />
      <TeamCard
        teamTitle="HARRY BANKS"
        teamPosition="Founder"
        teamImg={TeamThreeImg}
      />
      <TeamCard
        teamTitle="VICTORIA CLARK"
        teamPosition="Creative Director"
        teamImg={TeamFourImg}
      />
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  padding: 120px 0;
  background: #f2fefe;
  .container {
    padding: 80px 0 0 0;
    display: flex;
    justify-content: space-between;
  }
`;

export default Team;
