import React, { useContext, useState } from 'react';
import { PostContext } from '../context/PostContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './PostView.css';

const PostView = () => {
  const { posts } = useContext(PostContext);
  const [selectedPost, setSelectedPost] = useState(null); 

  const handleRowClick = (post) => {
    setSelectedPost(post);
  };

  return (
    <div className="container-fluid mt-5">
      <h2 className="mb-4">View All Posts</h2>

      <Link to="/">
        <button type="button" className="btn btn-primary mb-2">Add Post</button>
      </Link>

      <table className="table table-striped table-bordered" >
        <thead className="thead-dark">
          <tr>
            <th scope="col">User Order</th>
            <th scope="col">Title</th>
            <th scope="col">Content</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {posts.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center">No posts available</td>
            </tr>
          ) : (
            posts.slice(0).reverse().map(post => (
                <tr key={post.id} onClick={() => handleRowClick(post)}>
                  <th scope="row">{post.id}</th>
                  <td>{post.title}</td>
                  <td>{post.content}</td>
                  <td>
                    <Link to={`/post-details/${post.id}`}>
                      <button type="button" className="btn btn-success ">View Post Details</button>
                    </Link>
                  </td>
                </tr>
              ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PostView;