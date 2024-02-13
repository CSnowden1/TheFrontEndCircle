import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BlogGridItem from './blogGridItem';



const BlogGridContainer = styled.div`
  display: grid;
  gap: 20px;
  margin-top: 20px;
`;

const BlogGrid = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/api/blogs')
      .then(response => response.json())
      .then(data => setBlogs(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <BlogGridContainer>
      {blogs.map(blog => (
        <BlogGridItem key={blog.id} blog={blog} />
      ))}
    </BlogGridContainer>
  );
};

export default BlogList;
