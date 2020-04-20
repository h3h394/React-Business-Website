/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const DesignCard = ({cardImg, cardTitle}) => (
  <div css={styles} className="designCard">
    <img src={cardImg} alt='design' />
    <div className="desc">
      <h2>{cardTitle}</h2>
      <p>
        Lorem ipsum dolor sit amt, consectet adop adipisicing elit, sed do
        eiusmod tepo raraincididunt ugt labore.
      </p>
    </div>
  </div>
);

const styles = css`
  width: 100%;
  max-width: 32%;
  padding: 40px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 700ms, box-shadow 700ms, transform 700ms, filter 700ms;
  &:hover {
    background: #fff;
    box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.1);
    transform: translateY(-10px);
    img {
      filter: grayscale(0);
    }
  }
  img {
    margin: 0 auto;
    display: block;
    filter: grayscale(100%);
  }
  .desc {
    text-align: center;
    padding: 20px 0 0 0;
    h2 {
      margin: 40px 0 0 0;
      color: #515656;
      font-size: 19px;
      font-weight: 400;
    }
    p {
      font-size: 15px;
      color: #515656;
      margin: 6px 0;
    }
  }
`;

export default DesignCard;
