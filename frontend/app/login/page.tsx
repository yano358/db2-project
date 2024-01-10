"use client";

import { Button, Stack, TextField, Typography } from "@mui/material";
import { login } from "app/services/login";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState(false);

  const handleLogin = async () => {
    const { error } = await login(email, password);
    if (error) {
      setAuthError(true);
    }

    // TODO: redirect to home page or to admin page if superuser
    window.location.href = "/adminskiemoce";
  };

  return (
    <>
      <Stack spacing={2}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Arial",
            textAlign: "center",
            fontWeight: "bold",
            color: "#009688",
          }}
        >
          Log-in
        </Typography>
        <Stack spacing={2}>
          <TextField
            label="Email"
            type={"email"}
            required
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <TextField
            label="Password"
            type="password"
            required
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <Button variant="contained" onClick={handleLogin}>
            Login
          </Button>
          <Button variant="contained" href="/register">
            No account yet? Register here!
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default Login;
