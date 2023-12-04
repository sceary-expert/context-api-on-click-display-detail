// PostDetails.js
import React from 'react';
import { useApi } from '../context/ApiContext';

const PostDetails = ({ postId }) => {
  const { posts } = useApi();
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Post Details</h2>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetails;
