/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Button from "../GlobalComponents/Button";

const BuildInfo = ({ buildTitle }) => (
  <div css={styles} className="buildInfo">
    <h2>{buildTitle}</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute
    </p>
    <Button btnTitle="Read more" />
  </div>
);

const styles = css`
  color: #fff;
  width: 100%;
  max-width: 550px;
  h2 {
    font-size: 40px;
    line-height: 1;
  }
  p {
    margin: 30px 0 38px 0;
    font-size: 15px;
    line-height: 1.7;
  }
  .btn {
    background: #2f60c3;
    color: #fff;
    margin: 0;
    &:hover {
      background: #fff;
      color: #138fc2;
    }
  }
`;

export default BuildInfo;
