import React, { useState } from "react";
import {
  Avatar,
  Button,
  TextField,
  Box,
  Typography,
  Container,
  CssBaseline,
  Paper,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";
import { useNavigate, Link } from "react-router";

const theme = createTheme();

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && email && gender && password && acceptTerms) {
      console.log("Registering:", { name, email, gender, password });
      navigate("/");
    } else {
      alert("Please fill all fields and accept the terms.");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Paper elevation={3} sx={{ p: 4, mt: 2, borderRadius: 2 }}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Avatar sx={{ m: 1, backgroundColor: blueGrey[900] }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Register
              </Typography>
              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Email Address"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FormControl
                  component="fieldset"
                  margin="normal"
                  required
                  fullWidth
                >
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup
                    row
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                  </RadioGroup>
                </FormControl>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={acceptTerms}
                      onChange={(e) => setAcceptTerms(e.target.checked)}
                      color="primary"
                    />
                  }
                  label="I accept the terms and conditions"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, backgroundColor: blueGrey[900] }}
                >
                  Register
                </Button>
              </Box>
              <Typography variant="h6" sx={{ color: "gray" }}>
                Already Have Account?{" "}
                <Link to="/">
                  <span>Sign In</span>
                </Link>
              </Typography>
            </Box>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default RegisterPage;
