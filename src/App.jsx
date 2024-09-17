import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./Users/Home";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.min.css';

import { PostProvider } from './context/PostContext'; // Import PostProvider
import PostView from "./Users/PostView";
import PostDetails from "./Users/PostDetails";
import PostEdit from "./Users/PostEdit";

const App = () => {
  return (
    <PostProvider> 
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/postview" element={<PostView/>}></Route>
            <Route path="/post-details/:id" element={<PostDetails/>}></Route>
            <Route path="/post-edit/:id" element={<PostEdit/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </PostProvider>
  );
};

export default App;
