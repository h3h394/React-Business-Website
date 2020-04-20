/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Footer = () => (
  <div css={styles} className="footer">
    <p>
      &copy;Copyright 2018 ThemeCTG all right resurved. Designed by Quomodotheme
    </p>
  </div>
);

const styles = css`
  width: 100%;
  padding: 28px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  text-align: center;
  position: relative;
  p {
    font-size: 15px;
    font-weight: 300;
  }
`;

export default Footer;
