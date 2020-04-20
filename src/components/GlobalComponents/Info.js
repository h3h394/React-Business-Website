/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Info = ({ infoTitle }) => (
  <div css={styles} className="info">
    <h2>{infoTitle}</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
      voluptates, temporibus at, facere harum fugiat!
    </p>
  </div>
);

const styles = css`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  color: #515656;
  h2 {
    font-size: 28px;
    font-weight: 600;
    position: relative;
  }
  p {
    font-size: 14px;
    line-height: 1.8;
    margin: 14px 0 0 0;
  }
`;

export default Info;
