/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from "../GlobalComponents/Container";
import BlogCard from "./BlogCard";
import BlogOneBg from "../img/blogOne.webp";
import BlogTwoBg from "../img/blogTwo.webp";
import BlogThreeBg from "../img/blogThree.webp";

const Blog = () => (
  <section css={styles} className="blog">
    <Container>
      <BlogCard blogImg={BlogOneBg} />
      <BlogCard blogImg={BlogTwoBg} />
      <BlogCard blogImg={BlogThreeBg} />
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  padding: 120px 0;
  background: #f2fefe;
  .container {
    display: flex;
    justify-content: space-between;
  }
`;

export default Blog;
