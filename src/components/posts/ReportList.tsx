import { cloneElement, ReactElement, useState } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { useGetPostListQuery, useGetPostByNameQuery } from '../../services/posts'
import { FormControl, InputLabel, MenuItem, Paper, Select, SelectChangeEvent } from '@mui/material';
import MaterialUIPicker from '../ui/MaterialUIPicker'
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
    const [postTitle, setPostTitle] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setPostTitle(event.target.value as string);
    };
    const [secondary, setSecondary] = useState(false);

    const { data, error, isLoading } = useGetPostListQuery()

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
                        <MenuItem value={20}>Ascending</MenuItem>
                        <MenuItem value={30}>Descending</MenuItem>
                    </Select>
                </FormControl>
                <MaterialUIPicker />
            </FormGroup>
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <Grid container spacing={{ xs: 2, md: 3 }} rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {data.map((post) => (
                        <Grid item xs={12} md={3}>
                            <Link to={`post/${post.id}`}>
                                <Item>
                                    <h2>{parse(post.title.rendered)}</h2>
                                    <TimeAgo timestamp={format(new Date(post.date), "yyyy-MM-dd")} />
                                </Item>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            ) : null}
        </Box>
    );
}

export default ReportList