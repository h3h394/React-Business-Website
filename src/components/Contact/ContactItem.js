/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const ContactItem = ({
  contactIcon,
  contactTitle,
  contactSub,
  contactSubTwo,
}) => (
  <div css={styles} className="contactItem">
    <img src={contactIcon} alt="icon" />
    <div className="contactInfo">
      <h4>{contactTitle}</h4>
      <p>{contactSub}</p>
      <p>{contactSubTwo}</p>
    </div>
  </div>
);

const styles = css`
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
  width: 100%;
  max-width: 300px;
  img {
    margin-right: 30px;
  }
  .contactInfo {
    color: #fff;
    h4 {
      font-size: 16px;
      padding-bottom: 6px;
    }
    p {
      font-size: 14px;
      cursor: pointer;
    }
  }
`;

export default ContactItem;
