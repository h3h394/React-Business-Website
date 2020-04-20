/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const RowHeading = ({ rowTitle, isOpened, setIsOpened }) => (
  <div css={styles} className="rowHeading">
    <div className="iconWrap" onClick={() => setIsOpened(!isOpened)}>
      <i className={isOpened ? "fas fa-minus" : "fas fa-plus"}></i>
    </div>
    <h4 className={isOpened ? "activeTitle" : ""}>{rowTitle}</h4>
  </div>
);

const styles = css`
  display: flex;
  align-items: center;
  padding: 20px 0;
  h4 {
    color: #515656;
    font-weight: 500;
    &.activeTitle {
      color: #000;
    }
  }
  .iconWrap {
    width: 34px;
    height: 34px;
    background: #2f60c3;
    border-radius: 50px;
    display: flex;
    cursor: pointer;
    margin-right: 20px;
    i {
      color: #fff;
      margin: auto;
    }
  }
`;

export default RowHeading;
