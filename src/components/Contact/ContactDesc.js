/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import ContactItem from "./ContactItem";
import ContactIconOne from "../img/contactIconOne.webp";
import ContactIconTwo from "../img/contactIconTwo.webp";
import ContactIconThree from "../img/contactIconThree.webp";

const ContactDesc = () => (
  <div className="contactDesc">
    <ContactItem
      contactIcon={ContactIconOne}
      contactTitle="Address:"
      contactSub="Box 564, Disneyland"
      contactSubTwo="USA"
    />
    <ContactItem
      contactIcon={ContactIconTwo}
      contactTitle="Telephone:"
      contactSub="+8801812726495"
      contactSubTwo='+8801687420471'
    />
    <ContactItem
      contactIcon={ContactIconThree}
      contactTitle="E-mail:"
      contactSub="youremail@example.com"
      contactSubTwo='example@mail.com'
    />
  </div>
);

export default ContactDesc;
