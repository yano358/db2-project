"use client";
import React, { useState, useEffect } from "react";
import { Button, TextField, Grid, Box } from "@mui/material";
import {
  useCreateUserApiV1UsersPostMutation,
  useReadUserByEmailApiV1UsersEmailGetQuery,
  ReadUserByEmailApiV1UsersEmailGetApiArg,
  UserCreate,
} from "@/lib/redux/api/users";

const UserRegistration: React.FC = ({}) => {
  const [userData, setUserData] = useState<UserCreate>({
    email: "",
    username: "",
    password: "",
    is_superuser: false, // Default to false for new user
  });
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [emailExists, setEmailExists] = useState<string>("");
  const parsedMail: ReadUserByEmailApiV1UsersEmailGetApiArg = {
    email: userData.email,
  };

  const {
    data: existingUser,
    error: userError,
    isLoading: userLoading,
  } = useReadUserByEmailApiV1UsersEmailGetQuery(parsedMail);

  useEffect(() => {
    setEmailExists(userData.email);
  }, [existingUser]);

  const [createUserMutation] = useCreateUserApiV1UsersPostMutation();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (emailExists === userData.email) {
      alert("Account with this email already exists!");
      return;
    }
    if (userData.password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const response = await createUserMutation({ userCreate: userData });
    } catch (error) {
      console.error("Error creating user:", error);
    }

    window.location.href = "/login";
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            label="Email"
            name="email"
            type={"email"}
            value={userData.email}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Username"
            name="username"
            value={userData.username}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            type="password"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            type="password"
            fullWidth
            required
          />
        </Grid>
      </Grid>
      <Box
        sx={{
          gap: 3,
          display: "flex",
          justifyContent: "left",
          alignItems: "left",
          flexDirection: "row",
          paddingY: 2,
        }}
      >
        <Button type="submit" variant="contained">
          Register
        </Button>
        <Button variant="contained" href="/login">
          Already have an account? Login here!
        </Button>
      </Box>
    </form>
  );
};

//Grid item for later
//<Grid item xs={12}>
//          <FormControlLabel
//            control={
//              <Checkbox
//                checked={userData.is_superuser}
//               onChange={handleCheckboxChange}
//                name="is_superuser"
//              />
//            }
//            label="Is Superuser"
//          />
//        </Grid>
//const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//  const { name, checked } = event.target;
//  setUserData((prevUserData) => ({
//    ...prevUserData,
//    [name]: checked,
//  }));
//};

export default UserRegistration;
