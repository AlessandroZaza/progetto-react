import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link, useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext, UseUserAuth } from '../Context/authContext';
import { useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import CopyrightText from '../Components/copyright';

const theme = createTheme();

export default function SignUp() {

  const { currentUser, createAccount, signInWithGoogle, login } = UseUserAuth();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const handleCreateAccount = () => {
    try {
      createAccount(email, password);
      navigate("/home")
      console.log(email + password);
    } catch (err: any) {
      console.log(err);
    }
  };

  return (

    <div style={{ border: '2px solid whitesmoke', width: '100%', height: '100%', padding: '5% 5% 5% 5%', marginTop: '35%', backgroundColor: 'whitesmoke' }}>

      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h4" style={{ position: 'absolute', top: '20%' }} >
              TvMaze-App
            </Typography>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>

              </Grid>

              <Button
                fullWidth
                variant="outlined"
                sx={{ mt: 6 }}
                onClick={signInWithGoogle}
              >
                <GoogleIcon
                  sx={{ mr: 2 }}
                />
                Sign Up with Google
              </Button>

              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 3 }}
                onClick={handleCreateAccount}
              >
                Sign Up
              </Button>
              <Link to={"/sign-in"} >
                {"Already have an account? Sign in"}
              </Link>
            </Box>
          </Box>
          <CopyrightText sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </div>
  );
}


/*
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { UseUserAuth } from '../Context/authContext';
import { useState } from 'react';

export default function SignUp() {

  const { currentUser, createAccount, signInWithGoogle, login } = UseUserAuth();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const handleCreateAccount = () => {
    try {
      createAccount(email, password);
      navigate("/home")
      console.log(email + password);
      console.log(currentUser?.displayName);
    } catch (err: any) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    if (currentUser !== null) {
      navigate("/home");
      
    }
  }, [navigate, currentUser]);

  return (

    <div style={{ border: '2px solid whitesmoke', width: '100%', height: '100%', padding: '5% 5% 5% 5%', marginTop: '35%', backgroundColor: 'whitesmoke' }}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h4" style={{ position: 'absolute', top: '20%' }} >
            TvMaze-App
          </Typography>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>

            </Grid>

            <Button

              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={signInWithGoogle}
            >

              Sign Up - Google
            </Button>

            <Button

              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleCreateAccount}
            >

              Sign Up
            </Button>
            <Link to={"/sign-in"}>
              {"Already have an account? Sign in"}
            </Link>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
*/