import { useGetPostListQuery, useGetPostByNameQuery } from '../services/posts'
import ReportList from '../components/posts/ReportList';
import {
  Typography,
} from "@mui/material";

function Home() {

  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetPostListQuery()
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = postApi.endpoints.getPostByName.useQuery('bulbasaur')

  return (
    <>
      <Typography color="primary.dark" variant="h1">
        news
      </Typography>
      <div className="App">
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <ReportList />
        ) : null}
      </div>
    </>
  )
}
export default Home;
