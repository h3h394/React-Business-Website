/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const ClientCard = ({ clientImg }) => (
  <div css={styles} className="clientCard">
    <img src={clientImg} alt="client" />
    <h2>AR Rahman</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel vero dolore
      officiis, velit id libero illum harum hic magni, quae repellendus adipisci
      possimus saepe nostrum doloribus repudiandae asperiores commodi voluptate.
    </p>
  </div>
);

const styles = css`
  color: #fff;
  width: 100%;
  h2 {
    margin: 14px 0 8px 0;
  }
  p {
    font-size: 15px;
  }
`;

export default ClientCard;
