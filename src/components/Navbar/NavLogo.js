/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const NavLogo = () => <h2 css={styles}>COLID</h2>;

const styles = css`
  margin: 0;
  color: #fff;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: 1.4px;
  line-height: 1;
  cursor: pointer;
`;

export default NavLogo;
