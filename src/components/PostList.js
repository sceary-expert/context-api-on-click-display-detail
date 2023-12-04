// PostList.js
import React, { useState } from 'react';
import { useApi } from '../context/ApiContext';

const PostList = ({ onSelectPost }) => {
  const { posts } = useApi();
  const [selectedPostId, setSelectedPostId] = useState(null);

  const handlePostClick = (postId) => {
    setSelectedPostId(postId);
    onSelectPost(postId);
  };

  return (
    <div>
      <h2>Post List</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id} onClick={() => handlePostClick(post.id)} style={{ cursor: 'pointer' }}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;