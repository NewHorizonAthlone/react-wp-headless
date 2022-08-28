import parse from "html-react-parser";
import { format } from "date-fns";

import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

import { Link } from "react-router-dom";

const PostsExcerpt = ({ post }) => {
  return (
    <article>
      <h2>{parse(post.title.rendered)}</h2>
      <p className="excerpt">{parse(post.content.rendered.substring(0, 75))}</p>
      <p className="postCredit">
        <Link to={`post/${post.id}`}>View Post </Link>
        <PostAuthor userId={post.author} />
        <TimeAgo timestamp={format(new Date(post.date), "yyyy-MM-dd")} />
      </p>
      <ReactionButtons post={post} />
    </article>
  );
};

export default PostsExcerpt;
