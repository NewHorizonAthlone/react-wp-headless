import {
  Box,
  Paper,
  Typography,
} from "@mui/material";

function About() {

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
        sx={{ padding: "1rem", backgroundColor: "secondary.light" }}
      >
        <h1>New Horizon Athlone</h1>
        <p>
          New Horizon is a fully registered charity RCN: 20204649. Check us out on the Charity Regulator Website

          We are a group of voluntary, unpaid workers without state funding. We promise total and absolute confidentiality in all our dealings with clients.

          As activists, we welcome asylum seekers and refugees and wish to help and support them as they start to rebuild their lives.

          This website exists to:

          Provide useful information about living in Athlone and Ireland.
          Provide information on how to maintain your physical and mental health
          Provide information to help you navigate the asylum process.
          Provide useful information to help you leave the asylum process.

          If you just want to browse the information follow the links at the top of the screen.

          News shows what’s going on
          Projects we are running
          Information database
          Cookbook
        </p>
      </Paper>
    </Box>
  )
}
export default About;
