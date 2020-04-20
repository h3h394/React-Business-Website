/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Button from "../GlobalComponents/Button";

const Info = () => (
  <div css={styles} className="info">
    <h2>
      It’s all about Promoting your
      <br /> Business
    </h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero ex
      inventore vel error
      <br /> quibusdam animi fugiat, doloribus dolores consectetur nulla
      deleniti sint blanditiis
      <br /> quod debitis quis vitae officiis tempora numquam.
    </p>
    <Button btnTitle="Watch video" />
  </div>
);

const styles = css`
  h2 {
    margin: 0;
    font-size: 36px;
    color: #fff;
    line-height: 1.2;
  }
  p {
    margin: 14px 0;
    color: #fff;
    font-size: 14px;
  }
  .btn {
    margin: 26px 0 0 0;
  }
`;

export default Info;
