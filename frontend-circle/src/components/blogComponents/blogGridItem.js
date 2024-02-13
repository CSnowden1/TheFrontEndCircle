import React from 'react';
import styled from 'styled-components';

const BlogItemContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
  }

  h2 {
    color: #333;
    font-size: 1.5em;
    margin-bottom: 10px;
  }

  p {
    color: #666;
    line-height: 1.6;
  }

  a {
    display: inline-block;
    margin-top: 15px;
    color: #007bff;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const BlogGridItem = ({ blog }) => {
  return (
    <BlogItemContainer>
      <h2>{blog.title}</h2>
      <p>{blog.excerpt}</p>
      <a href={`/blog/${blog.id}`}>Read More</a>
    </BlogItemContainer>
  );
};

export default BlogItem;
