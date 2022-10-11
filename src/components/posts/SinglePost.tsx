import { useGetPostByNameQuery } from '../../services/posts'
import parse from "html-react-parser";
import { format } from "date-fns";
import { useNavigate, useParams } from "react-router-dom";
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
    Box,
    Paper,
    Typography,
} from "@mui/material";

const SinglePost = () => {
    // retrieve postId
    const { postId } = useParams();

    const { data: post,
        isLoading, } = useGetPostByNameQuery(postId!, {
            pollingInterval: 3000,
            refetchOnMountOrArgChange: true,
            skip: false,
        })
    const navigate = useNavigate();
    const handleClose = () => navigate('/');

    if (isLoading) return <h2>Loading...</h2>

    console.log(post)

    if (!post) {
        return (
            <section>
                <h2>404 No Page {postId}</h2>
            </section>
        );
    }

    return (
        <Box
            height="auto"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
        >
            <Paper
                elevation={3}
                sx={{ m: .4, padding: ".4rem" }}
            >
                <article>
                    <h1>{post.title.rendered}</h1>
                    <p>{parse(post.content.rendered)}</p>
                </article>
                <IconButton style={{ float: 'left', marginTop: '.5rem' }} onClick={handleClose}>
                    <ArrowBackIcon />
                </IconButton>
            </Paper>
        </Box>
    )
}

export default SinglePost