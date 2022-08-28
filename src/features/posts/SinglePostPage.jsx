import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";
import parse from "html-react-parser";
import { format } from "date-fns";

import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

import { useParams } from "react-router-dom";

const SinglePostPage = () => {
  // retrieve postId
  const { postId } = useParams();

  const post = useSelector((state) => selectPostById(state, Number(postId)));

  console.log(post)

  if (!post) {
    return (
      <section>
        <h2>404 No Page {postId}</h2>
      </section>
    );
  }

  return (
    <article>
      <h2>{parse(post.title.rendered)}</h2>
      <p>{parse(post.content.rendered)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.author} />
        <TimeAgo timestamp={format(new Date(post.date), "yyyy-MM-dd")} />
      </p>
      <ReactionButtons post={post} />
    </article>
  );
};

export default SinglePostPage;
