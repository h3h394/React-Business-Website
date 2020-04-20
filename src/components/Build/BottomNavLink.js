/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const BottomNavLink = ({ handleActive, type, activeLink, setHidden }) => (
  <a css={styles} href="#/" className={type === activeLink ? 'active' : ''} onClick={() => {handleActive(type); setHidden(true)}}>
    Lorem ipsum<p>consectetur adipisicing elit.</p>
  </a>
);

const styles = css`
  text-decoration: none;
  padding: 30px 0;
  color: #fff;
  font-weight: 600;
  position: relative;
  &.active {
    &::after {
      content: "";
      position: absolute;
      top: -2px;
      width: 100%;
      border: 2px solid #fff;
    }
  }
  p {
    font-weight: 400;
  }
`;

export default BottomNavLink;
