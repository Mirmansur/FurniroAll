import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import "../compponets/List.css";

const defaultTheme = createTheme();
const Profil = () => {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    if (name === "john32" && password === "12345678") {
      localStorage.setItem("password", name);
      navigate("/dashbord");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="bluemabel">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            className="mebels"
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
            <Typography component="h1" variant="h5">
              Log In
            </Typography>
            <Box
              component="form"
              onSubmit={handelSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="User Name"
                name="username"
                autoComplete="username"
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                variant="standard"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
};
export default Profil;
