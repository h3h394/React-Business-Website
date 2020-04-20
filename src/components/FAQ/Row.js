/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState } from "react";
import RowHeading from "./RowHeading";
import RowContent from "./RowContent";

const Row = ({ rowTitle }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div css={styles} className="row">
      <RowHeading
        rowTitle={rowTitle}
        isOpened={isOpened}
        setIsOpened={setIsOpened}
      />
      <RowContent isOpened={isOpened} />
    </div>
  );
};

const styles = css`
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`;

export default Row;
