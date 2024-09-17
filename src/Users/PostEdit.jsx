import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PostContext } from '../context/PostContext';
import './PostEdit.css'

const PostEdit = () => {
  const { id } = useParams();
  const { posts, updatePost } = useContext(PostContext);
  const navigate = useNavigate();
  const post = posts.find(p => p.id === parseInt(id));

  if (!post) {
    return <div className="container mt-5"><h2>Post not found</h2></div>;
  }

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const handleUpdate = () => {
    updatePost(post.id, title, content);
    alert("Post updated successfully");
    navigate('/postview');
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-2">Edit Post</h2>
      <form>
        <div className="mb-4 mt-3">
          <label className="form-label">Title:</label>
          <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="mb-2 mt-4">
          <label className="form-label">Content:</label>
          <textarea className="form-control" value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <button type="button" className="btn btn-primary  mt-2" onClick={handleUpdate}>Update</button>
      </form>
    </div>
  );
};

export default PostEdit;