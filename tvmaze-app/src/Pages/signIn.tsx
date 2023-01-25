import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CopyrightText from "../Components/copyright";
import "./signIn.css";
import { auth } from "../Firebase/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { UseUserAuth } from "../Context/authContext";

const theme = createTheme();

export default function SignIn() {
  const { currentUser, login } = UseUserAuth();

  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email")?.toString();
    const password = data.get("password")?.toString();
    if (!!email && !!password){
        login( email, password)
        console.log(currentUser?.displayName);
    }
  };
  React.useEffect(() => {
    if ( currentUser !== null ) {
      navigate("/home");
    }
  }, [navigate, currentUser]);

  console.log("ciao dalla signIn :" + currentUser?.displayName);

  return (
    <div
      style={{
        border: "2px solid whitesmoke",
        width: "100%",
        height: "100%",
        padding: "5% 5% 5% 5%",
        marginTop: "35%",
        backgroundColor: "whitesmoke",
      }}
    >
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              component="h1"
              variant="h4"
              style={{ position: "absolute", top: "20%" }}
            >
              TvMaze-App
            </Typography>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
            <Typography component="h2" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>

              <Link to={"/sign-up"}>{"Don't have an account? Sign Up"}</Link>
            </Box>
          </Box>
          <CopyrightText sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </div>
  );
}
