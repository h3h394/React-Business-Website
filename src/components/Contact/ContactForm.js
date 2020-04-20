/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Button from "../GlobalComponents/Button";

const ContactForm = () => (
  <div css={styles} className="contactForm">
    <div>
      <input type="text" placeholder="Your name" />
      <input type="email" placeholder="E-mail address" />
    </div>
    <input type="text" placeholder="Message topic" />
    <textarea placeholder="Your message" cols="30" rows="6"></textarea>
    <Button btnTitle="Submit" />
  </div>
);

const styles = css`
  width: 100%;
  max-width: 730px;
  div {
    display: flex;
    justify-content: space-between;
    input {
      width: 48%;
    }
  }
  input,
  textarea {
    margin-bottom: 24px;
    padding: 12px 20px;
    width: 100%;
    border: none;
    outline: none;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    border-radius: 4px;
    resize: none;
    color: #555;
    &::placeholder {
      color: #555;
    }
  }
  .btn {
    background: #2f60c3;
    color: #fff;
    border-radius: 4px;
    padding: 11px 43px;
    letter-spacing: 1.3px;
    margin: 0;
    &:hover{
    background: #fff;
    color: #2f60c3;
    }
  }
`;

export default ContactForm;
