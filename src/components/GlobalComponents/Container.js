/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Container = ({ children, hidden }) => {
  
  return (
    <div css={styles} className={(hidden ? "hidden" : "") + " container"}>
      {children}
    </div>
  );
};

const styles = css`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
`;

export default Container;
