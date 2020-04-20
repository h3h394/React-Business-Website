/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from "../GlobalComponents/Container";
import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";

const Navbar = () => {
  return (
    <nav css={styles}>
      <Container>
        <NavLogo />
        <NavMenu />
      </Container>
    </nav>
  );
};

const styles = css`
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 10;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default Navbar;
