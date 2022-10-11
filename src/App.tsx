import { Box, Paper, CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes as appRoutes } from "./routes";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import NotFound from "../src/pages/NotFound";
import SinglePost from "./components/posts/SinglePost";

export function App() {

  // define theme
  const theme = createTheme({
    palette: {
      primary: {
        main: "#ec8f33",
        light: "#82e9de",
        dark: "#00867d",
        contrastText: "#000",
      },
      secondary: {
        light: "#63b8ff",
        main: "#236cb2",
        dark: "#005db0",
        contrastText: "#000",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box height="100vh"
        display="flex"
        flexDirection="column">
        <Router>
          <Navbar />
          <Paper
            elevation={3}
            sx={{ backgroundColor: "secondary.light" }}
          >
            <Routes>
              {appRoutes.map((route) => (
                <Route
                  key={route.key}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
              <Route path="post/:postId" element={<SinglePost />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </Paper>
          <Footer />
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export function WrappedApp() {
  return <App />
}
