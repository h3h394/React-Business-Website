/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const SponsorsOverlay = () => (
  <div css={styles} className="sponsorsOverlay"></div>
);

const styles = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(to bottom, #75cbe7 0%, #138fc2 100%);
  opacity: .8;
`;

export default SponsorsOverlay;
