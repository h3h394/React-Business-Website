/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const RowContent = ({ isOpened }) => (
  <p css={styles} className={isOpened ? "" : "hidden"}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodas
    temporo incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrd exercitation ullamco laboris nisi ut aliquip ex comodo
    consequat. Duis aute dolor in reprehenderit.
  </p>
);

const styles = css`
  padding: 0px 54px;
  font-size: 15px;
  color: #515656;
  height: 100px;
  transition: height 700ms ease-in-out;
  &.hidden {
    height: 0;
  }
`;

export default RowContent;
