import { useState, FC } from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
// import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';



function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://aygunsalimova.netlify.com">
        Aygun Salimova
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();


const Login: FC <{ onLogin: (token: string) => void }> = ({ onLogin }) =>{
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    
    try {
      const response = await axios.get('https://1curd3ms.trials.alfresco.com/alfresco/api/-default-/public/authentication/versions/1/tickets');
      
      const token = response.data.token;
      onLogin(token); 
    } catch (error) {
      console.error('Login failed: ', error);
    }
  };
  return (
    <div className='login'>
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" className='login-main'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor:'#6f6c9e'}}>
            <LockOutlinedIcon />
          </Avatar>
          <Box component="form"  method='post' sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              value={username}
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor:"#6f6c9e" }}
              onClick={handleLogin}           
            >
              Sign In
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    </div>
  );
}

export default Login