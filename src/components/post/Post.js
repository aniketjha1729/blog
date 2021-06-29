import React from "react";
import { Link } from "react-router-dom";
import "./post.css";
const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.unsplash.com/photo-1507010228826-fd02d8c83ddf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=741&q=80"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">name</span>
        </div>
        <Link to="" className="link">
          <span className="postTitle">Title</span>
        </Link>
        <hr />
        <span className="postDate">Date</span>
      </div>
      <p className="postDesc">
       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates repellendus laudantium vitae voluptate dolorum incidunt aut ipsa dignissimos. Esse porro adipisci modi commodi fugiat quia fuga aspernatur eius id nulla!
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia ab odit omnis neque est placeat ipsum voluptate consectetur velit at? Ducimus impedit neque voluptatem necessitatibus magni odio, eos asperiores aspernatur!
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil hic voluptates aperiam eos doloremque amet sunt iure officia quod doloribus culpa, temporibus commodi ea natus, neque vero suscipit officiis corporis!
      </p>
    </div>
  );
};

export default Post;
