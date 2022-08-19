import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllPosts, fetchPosts } from "./postsSlice";

export const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);

  console.log(posts);

  const postStatus = useSelector((state) => state.posts.status);
  // const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  const renderedPosts = () => {
    return posts.map((post) => (
      <article className="post-excerpt" key={post.id}>
        <h3>{post.slug}</h3>
        <p className="post-content">{post.content.substring(0, 100)}</p>
        <Link to={`/posts/${post.id}`} className="button muted-button">
          View Post
        </Link>
      </article>
    ));
  };

  return (
    <section className="post-list">
      <h2>Posts List</h2>
      {renderedPosts}
    </section>
  );
};
