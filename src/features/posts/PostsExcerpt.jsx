import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import parse from "html-react-parser";
import { format } from "date-fns";

const PostsExcerpt = ({ post }) => {
  return (
    <article>
      <h2>{parse(post.title.rendered)}</h2>
      <p>{parse(post.content.rendered.substring(0, 100))}</p>
      <p className="postCredit">
        <PostAuthor userId={post.author} />
        <TimeAgo timestamp={format(new Date(post.date), 'yyyy-MM-dd')} />
      </p>
      <ReactionButtons post={post} />
    </article>
  );
};

export default PostsExcerpt;
