/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Link = ({ linkTitle }) => (
  <a css={styles} href="#/">
    {linkTitle}
  </a>
);

const styles = css`
  text-decoration: none;
  display: block;
  color: #fff;
  padding: 30px 12px;
  position: relative;
  border-top: 3px solid transparent;
  &:hover,
  &:first-of-type {
    border-top: 3px solid #fff;
    &::after {
      position: absolute;
      content: "";
      border-right: 10px solid transparent;
      border-left: 10px solid transparent;
      border-top: 10px solid #fff;
      transform: translateX(-50%);
      left: 50%;
      top: -2px;
    }
  }
`;

export default Link;
