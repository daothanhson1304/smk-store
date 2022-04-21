import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import BlogImageOne from '../../assets/images/blog-1.jpg';
import BlogImageTwo from '../../assets/images/blog-2.jpg';
import BlogImageThree from '../../assets/images/blog-3.jpg';

const BlogContainer = styled.div`
  ${tw`
    w-full
    min-h-full
    px-12
    mt-12
    flex
    items-center
    justify-between
    gap-6
  `}
`;
const BlogCard = styled.div`
  ${tw`

  `}
`;
const BlogCardImage = styled.div`
  img {
    border-radius: 10px;
  }
`;
const BlogCardContent = styled.div`
  ${tw`
    flex
    flex-col
    items-start
  `}
`;
export const Blog = () => {
  return (
    <BlogContainer>
      <BlogCard>
        <BlogCardImage>
          <img src={BlogImageOne} />
        </BlogCardImage>
        <BlogCardContent>
          <a href=''>Clothes</a>
          <h3>Curbside fashion Trends: How to Win the Pickup Battle.</h3>
          <p>By Mr Robin / Jan 18, 2022</p>
        </BlogCardContent>
      </BlogCard>
      <BlogCard>
        <BlogCardImage>
          <img src={BlogImageTwo} />
        </BlogCardImage>
        <BlogCardContent>
          <a href=''>Clothes</a>
          <h3>Curbside fashion Trends: How to Win the Pickup Battle.</h3>
          <p>By Mr Robin / Jan 18, 2022</p>
        </BlogCardContent>
      </BlogCard>
      <BlogCard>
        <BlogCardImage>
          <img src={BlogImageThree} />
        </BlogCardImage>
        <BlogCardContent>
          <a href=''>Clothes</a>
          <h3>Curbside fashion Trends: How to Win the Pickup Battle.</h3>
          <p>By Mr Robin / Jan 18, 2022</p>
        </BlogCardContent>
      </BlogCard>
    </BlogContainer>
  );
};
