import React, { useState, useContext } from 'react';
import { PostContext } from '../context/PostContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const { addPost } = useContext(PostContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      addPost(title, content);
      setTitle('');
      setContent('');
      alert('Post created successfully!');
      navigate("/postview");
    } else {
      alert('Please fill in both title and content.');
    }
  };

  return (
    <div className="container mt-5 ">
      <h2 className="mb-4">Create a New Post</h2>
      <form onSubmit={handleSubmit} className="bg-light p-5 rounded shadow-sm">
        <div className="mb-2">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            id="title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">Content</label>
          <textarea
            id="content"
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Create Post</button>
      </form>
    </div>
  );
};

export default Home;
