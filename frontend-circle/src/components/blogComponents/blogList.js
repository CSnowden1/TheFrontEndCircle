import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BlogItem from './blogItem';



const BlogListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/api/blogs')
      .then(response => response.json())
      .then(data => setBlogs(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <BlogListContainer>
      {blogs.map(blog => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </BlogListContainer>
  );
};

export default BlogList;
