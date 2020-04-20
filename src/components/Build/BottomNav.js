/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import BottomNavLink from "./BottomNavLink";

const BottomNav = ({ handleActive, activeLink, setHidden }) => {
  return (
    <div css={styles} className="bottomNav">
      <BottomNavLink
        handleActive={handleActive}
        activeLink={activeLink}
        type="first"
        setHidden={setHidden}
      />
      <BottomNavLink
        handleActive={handleActive}
        activeLink={activeLink}
        type="second"
        setHidden={setHidden}
      />
      <BottomNavLink
        handleActive={handleActive}
        activeLink={activeLink}
        type="third"
        setHidden={setHidden}
      />
      <BottomNavLink
        handleActive={handleActive}
        activeLink={activeLink}
        type="fourth"
        setHidden={setHidden}
      />
    </div>
  );
};

const styles = css`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #f3f3f3;
`;

export default BottomNav;
