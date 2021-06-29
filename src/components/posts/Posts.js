import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
import ImageHelper from "./ImageHelper";
import "./posts.css";

const Posts = () => {
  const [allPosts, setAllPosts] = useState([]);

  const sortByDate = (a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    if (a.date > b.date) {
      return -1;
    }
    return 0;
  };

  const getAllPost = async () => {
    try {
      const { data } = await axios.get("/post/allPosts");
      const sortedData = data.sort(sortByDate);
      setAllPosts(sortedData);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllPost();
  }, []);
  return (
    <div className="posts">
      {allPosts.map((post) => (
        <div className="post">
          <ImageHelper postId={post._id} />
          <div className="postInfo">
            <div className="postCats">
              <span className="postCat"></span>
            </div>
            <Link to="" className="link">
              <span className="postTitle">{post.title}</span>
            </Link>
            <hr />
            <span className="postDate">
              {new Date(post.date).toDateString()}
            </span>
          </div>
          <p className="postDesc">{post.content}</p>
          <Link to={`/post/${post._id}`} className="">Read More...</Link>
        </div>
      ))}
    </div>
  );
};

export default Posts;
