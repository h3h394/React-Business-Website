/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import heroOverlay from "../img/angle-bg.webp";

const Overlay = () => (
  <div css={styles} className="overlay">
    <div className="overlayImg"></div>
  </div>
);

const styles = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(
    to bottom,
    rgba(117, 203, 231, 0.8) 0%,
    rgba(19, 143, 194, 0.8) 100%
  );
  display: flex;
  align-items: flex-end;
  .overlayImg {
    width: 100%;
    height: 400px;
    background: url('${heroOverlay}') no-repeat center/cover;
  }
`;

export default Overlay;
