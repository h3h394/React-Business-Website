/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const TeamCard = ({ teamImg, teamTitle, teamPosition }) => (
  <div css={styles} className="teamCard">
    <div className="teamBg">
      <img src={teamImg} alt="team" />
    </div>
    <div className="about">
      <h3>{teamTitle}</h3>
      <p>{teamPosition}</p>
      <div className="socialIcons">
        <div className="circle">
          <i className="fab fa-facebook-f"></i>
        </div>
        <div className="circle">
          <i className="fab fa-twitter"></i>
        </div>
        <div className="circle">
          <i className="fab fa-linkedin-in"></i>
        </div>
        <div className="circle">
          <i className="fab fa-pinterest-p"></i>
        </div>
      </div>
    </div>
  </div>
);

const styles = css`
  width: 100%;
  max-width: 260px;
  background: #fff;
  box-shadow: 0 5px 30px -10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 500ms ease-in-out;
  &:hover {
    transform: translateY(-10px);
    img {
      transform: scale(1.15);
    }
    .about {
      .socialIcons {
        height: 90px;
        bottom: 0;
      }
    }
  }
  .teamBg {
    width: 100%;
    max-width: 220px;
    overflow: hidden;
    padding: 20px 0 0 0;
    img {
      width: 100%;
      height: auto;
      display: block;
      transition: transform 500ms ease-in-out;
    }
  }
  .about {
    text-align: center;
    padding: 18px 0;
    color: #515656;
    position: relative;
    overflow: hidden;
    h3 {
      font-size: 18px;
      font-weight: 600;
    }
    p {
      font-size: 12px;
      font-weight: 500;
      margin: 4px 0 0 0;
    }
    .socialIcons {
      width: 100%;
      max-width: 220px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #fff;
      height: 0px;
      position: absolute;
      bottom: -100px;
      transition: height 500ms ease-in-out, bottom 500ms ease-in-out;
      .circle {
        width: 30px;
        background: #fff;
        height: 30px;
        border-radius: 50px;
        display: flex;
        cursor: pointer;
        transition: background 400ms ease-in-out;
        &:hover {
          background: #4095b4;
          i {
            color: #fff;
          }
        }
        i {
          transition: color 400ms ease-in-out;
          color: #4095b4;
          margin: auto;
        }
      }
    }
  }
`;

export default TeamCard;
