/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const ContactWrap = () => (
  <div css={styles} className="contactWrap">
    <div className="desc">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id corrupti
        architecto consequuntur, laborum quaerat sed nemo temporibus unde,
        beatae vel.
      </p>
    </div>
    <div className="socialIcons">
      <div className="circle">
        <i className="fab fa-facebook-f"></i>
      </div>
      <div className="circle">
        <i className="fab fa-twitter"></i>
      </div>
      <div className="circle">
        <i className="fab fa-google-plus-g"></i>
      </div>
      <div className="circle">
        <i className="fab fa-linkedin-in"></i>
      </div>
      <div className="circle">
        <i className="fab fa-github-alt"></i>
      </div>
    </div>
  </div>
);

const styles = css`
  width: 100%;
  max-width: 1140px;
  padding: 60px 0;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .desc {
    width: 100%;
    max-width: 500px;
    color: #fff;
    p {
      font-size: 15px;
      line-height: 1.8;
    }
  }
  .socialIcons {
    display: flex;
    align-items: center;
    .circle {
      background: #fff;
      cursor: pointer;
      width: 35px;
      height: 35px;
      border-radius: 50px;
      margin-left: 10px;
      display: flex;
      transition: background 400ms ease-in-out;
      &:hover {
        background: #138fc2;
        i {
          color: #fff;
        }
      }
      i {
        transition: color 400ms ease-in-out;
        margin: auto;
        color: #138fc2;
      }
    }
  }
`;

export default ContactWrap;
