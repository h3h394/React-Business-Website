/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Button = ({ btnTitle }) => (
  <a css={styles} className="btn" href="#/">
    {btnTitle}
  </a>
);

const styles = css`
  padding: 11px 34px;
  color: #138fc2;
  background: #fff;
  border-radius: 50px;
  transition: background 600ms ease-in-out, color 600ms ease-in-out;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
  margin: 24px 0 0 0;
  &:hover {
    background: #138fc2;
    color: #fff;
  }
`;

export default Button;
