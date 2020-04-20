/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Link from "./NavLink";

const NavMenu = () => (
  <div css={styles} className="menu">
    <Link linkTitle="Home" />
    <Link linkTitle="Service" />
    <Link linkTitle="Features" />
    <Link linkTitle="Pricing" />
    <Link linkTitle="Team" />
    <Link linkTitle="FAQ" />
    <Link linkTitle="Blog" />
    <Link linkTitle="Contact" />
  </div>
);

const styles = css`
  display: flex;
`;

export default NavMenu;
