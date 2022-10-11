import {
  Box,
  Paper,
  Typography,
} from "@mui/material";

function About() {

  return (
    <Box
      height="60vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Paper
        elevation={3}
        sx={{ padding: "1rem", backgroundColor: "secondary.light" }}
      >
        <Typography color="primary.dark" variant="h1">
          About Page
        </Typography>
        <h1>This is the About Page</h1>
        <div className="card">

        </div>
      </Paper>
    </Box>
  )
}
export default About;
