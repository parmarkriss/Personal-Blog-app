import React, { useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PostContext } from '../context/PostContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PostDetails.css'; 

const PostDetails = () => {
  const { id } = useParams();
  const { posts, deletePost } = useContext(PostContext);
  const navigate = useNavigate();
  const post = posts.find(p => p.id === parseInt(id));

  if (!post) {
    return <div className="container mt-5"><h2>Post not found</h2></div>;
  }

  const handleDelete = () => {
    deletePost(post.id);
    navigate('/postview'); 
  };

  const handleEdit = () => {
    navigate(`/post-edit/${id}`);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Post Details</h2>
      <Link to="/postview">
       <button type="button" className="btn btn-success mb-3" onClick={handleDelete}>Back To PostView</button>
      </Link>
      <div className="post-card shadow-sm mb-5">
        <div className="post-card-body">
          <h4 className="post-card-title mb-3">Title:- {post.title}</h4>
          <p className="post-card-content mb-3">Content:- {post.content}</p>
          <p className="post-card-date text-muted">
            <p>Posted on: {new Date(post.id).toLocaleDateString()}</p>
          </p>
          <div className="d-flex justify-content-end">
            <button type="button" className="btn btn-danger me-2" onClick={handleDelete}>Delete</button>
            <button type="button" className="btn btn-primary" onClick={handleEdit}>Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
