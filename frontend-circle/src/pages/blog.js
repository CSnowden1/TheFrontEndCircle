import React from 'react';
import styled from 'styled-components';
import BlogList from '../components/blogComponents/blogList';

const BlogPageContainer = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 20px;
  text-align: center;
`;

const BlogPage = () => {
  return (
    <BlogPageContainer>
      <h1>Blog</h1>
      <BlogList />
    </BlogPageContainer>
  );
};

export default BlogPage;
