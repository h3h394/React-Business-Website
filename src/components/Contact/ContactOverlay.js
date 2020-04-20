/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import contactBg from "../img/angle-bg.webp";

const ContactOverlay = () => (
  <div css={styles} className="contactOverlay">
    <div className="contactOverlayImg"></div>
  </div>
);

const styles = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(to bottom,#75cbe7 0%,#138fc2 100%);
  display: flex;
  align-items: flex-end;
  .contactOverlayImg {
    width: 100%;
    height: 400px;
    background: url('${contactBg}') no-repeat center/cover;
  }
`;

export default ContactOverlay;
