import { cloneElement, ReactElement, useRef, useState } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup'
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { useGetPostListQuery } from '../../services/posts'
import { FormControl, InputLabel, MenuItem, Paper, Select, SelectChangeEvent } from '@mui/material';
import MaterialUIDatePicker from '../ui/MaterialUIDatePicker'
import parse from "html-react-parser";
import { format } from "date-fns";
import TimeAgo from './TimeAgo'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const ReportList = () => {
    const { data, error, isLoading } = useGetPostListQuery()
    const posts = data?.slice()
    const [postTitle, setPostTitle] = useState('');
    const [sortPosts, setSortPosts] = useState(posts);
    const handleChange = (event: SelectChangeEvent) => {
        setPostTitle(event.target.value as string);
    };

    function sortPostsClickAsc() {
        const sorted = posts?.sort((a: any, b: any) => (a.slug > b.slug) ? 1 : -1);
        setSortPosts(sorted)
    }

    function sortPostsClickDsc() {
        const sorted = posts?.sort((a: any, b: any) => (a.slug > b.slug) ? 1 : -1).reverse();
        setSortPosts(sorted)
    }

    function sortPostsClickDate() {
        const sorted = posts?.sort((a: any, b: any) => (a.date > b.date) ? 1 : -1);
        setSortPosts(sorted)
    }

    return (
        <Box sx={{ p: 2, flexGrow: 1, maxWidth: 1280 }}>
            <FormGroup row>
                <FormControl sx={{ mb: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-simple-select-label">Title</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={postTitle}
                        label="Title"
                        onChange={handleChange}
                    >
                        <MenuItem onClick={sortPostsClickAsc} value={20}>Ascending</MenuItem>
                        <MenuItem onClick={sortPostsClickDsc} value={30}>Descending</MenuItem>
                    </Select>
                </FormControl>
                <MaterialUIDatePicker />
            </FormGroup>
            {
                error ? (
                    <>Oh no, there was an error</>
                ) : isLoading ? (
                    <>Loading...</>
                ) : sortPosts ? (
                    <Grid container spacing={{ xs: 2, md: 3 }} rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        {sortPosts.map((post) => (
                            <Grid key={post.id} item xs={12} md={4}>
                                <Link to={`post/${post.id}`}>
                                    <Item style={{ height: '100%' }}>
                                        <h2>{parse(post.title.rendered)}</h2>
                                        <TimeAgo timestamp={format(new Date(post.date), "yyyy-MM-dd")} />
                                    </Item>
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                ) : null
            }
        </Box >
    );
}

export default ReportList