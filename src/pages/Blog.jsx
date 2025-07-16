import React from 'react';
import blogData from '../data/blog.json';

const Blog = () => {
  return (
    <div className="container">
      <h2 className="mb-4">Blog Posts</h2>
      <div className="list-group">
        {blogData.map((post, idx) => (
          <a key={idx} href={post.link} className="list-group-item list-group-item-action" target="_blank" rel="noreferrer">
            <h5 className="mb-1">{post.title}</h5>
            <p className="mb-1">{post.summary}</p>
            <small className="text-muted">{post.date}</small>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blog;
