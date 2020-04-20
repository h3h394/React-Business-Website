/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Button from "../GlobalComponents/Button";

const PricingCard = ({ pricingTitle, pricingTag }) => (
  <div css={styles} className="pricingCard">
    <div className="cardOverlay">
      <i className="fas fa-crown"></i>
    </div>
    <h2>{pricingTitle}</h2>
    <div className="pricingMenu">
      <p>
        <span>{pricingTag}</span>/Month
      </p>
      <p>100 MB Disk Space</p>
      <p>2 Subdomains</p>
      <p>5 Email Accounts</p>
      <p>Webmail Support</p>
      <p>Customer Support 24/7</p>
    </div>
    <Button btnTitle="Purchase" />
  </div>
);

const styles = css`
  background: #fff;
  width: 100%;
  max-width: 350px;
  text-align: center;
  padding: 46px;
  border-radius: 4px;
  position: relative;
  border: 1px solid transparent;
  .cardOverlay {
    display: none;
  }
  &:nth-child(2) {
    transform: scale(1.1);
    position: relative;
    .cardOverlay {
      position: absolute;
      top: -1px;
      left: 50%;
      transform: translateX(-50%);
      width: 96px;
      border-radius: 0 0 50% 50%;
      height: 30px;
      background: #55a2be;
      color: #fff;
      display: flex;
      justify-content: center;
      i {
        padding: 6px 0 0 0;
        font-size: 12px;
      }
    }
  }
  h2 {
    color: #515656;
    font-weight: 500;
    padding-bottom: 20px;
  }
  .pricingMenu {
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    padding: 30px 0;
    p {
      margin: 12px 0;
      font-size: 15px;
      color: #515656;
      span {
        font-weight: 600;
      }
    }
  }
  .btn {
    background: #2f60c3;
    color: #fff;
    &:hover {
      background: #fff;
      color: #138fc2;
      box-shadow: 2px 5px 20px -5px rgba(0, 0, 0, 0.1);
    }
  }
`;

export default PricingCard;
