"use client";
import React, { useState } from "react";
import { Typography, TextField, Button, Grid, Paper } from "@mui/material";

import {
  useUpdateClientApiV1ClientsUserIdPatchMutation,
  ClientsUpdate,
  UpdateClientApiV1ClientsUserIdPatchApiArg,
} from "@/lib/redux/api/clients";

type ClientDetailsProps = {
  client: {
    id: number | undefined;
    first_name?: string;
    last_name?: string;
    country?: string;
    city?: string;
    address?: string;
    postal_code?: string;
  };
  refetch: () => Promise<UpdateClientApiV1ClientsUserIdPatchApiArg>;
};

const ClientDetails: React.FC<ClientDetailsProps> = ({ client, refetch }) => {
  const [isEditing, setEditing] = useState(false);
  const [updatedClient, setUpdatedClient] = useState<ClientsUpdate>({});

  const [updateClientMutation] =
    useUpdateClientApiV1ClientsUserIdPatchMutation();

  const handleSaveChanges = async () => {
    try {
      await updateClientMutation({
        userId: Number(client.id),
        clientsUpdate: updatedClient,
      });

      setEditing(false);
      refetch();
    } catch (error) {
      console.error("Error updating client:", error);
    }
  };

  const toggleEditing = () => {
    setEditing(!isEditing);
    if (!isEditing) {
      setUpdatedClient({});
    }
  };

  return (
    <Paper
      elevation={3}
      style={{ padding: "20px", maxWidth: "400px", marginBottom: "20px" }}
      sx={{ textAlign: "center" }}
    >
      <Typography variant="h5">Client Details</Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography>First Name:</Typography>
          {isEditing ? (
            <TextField
              value={updatedClient.first_name || ""}
              onChange={(e) =>
                setUpdatedClient({
                  ...updatedClient,
                  first_name: e.target.value,
                })
              }
            />
          ) : (
            <Typography>{client.first_name}</Typography>
          )}
        </Grid>

        <Grid item xs={6}>
          <Typography>Last Name:</Typography>
          {isEditing ? (
            <TextField
              value={updatedClient.last_name || ""}
              onChange={(e) =>
                setUpdatedClient({
                  ...updatedClient,
                  last_name: e.target.value,
                })
              }
            />
          ) : (
            <Typography>{client.last_name}</Typography>
          )}
        </Grid>

        <Grid item xs={6}>
          <Typography>Country:</Typography>
          {isEditing ? (
            <TextField
              value={updatedClient.country || ""}
              onChange={(e) =>
                setUpdatedClient({
                  ...updatedClient,
                  country: e.target.value,
                })
              }
            />
          ) : (
            <Typography>{client.country}</Typography>
          )}
        </Grid>

        <Grid item xs={6}>
          <Typography>City:</Typography>
          {isEditing ? (
            <TextField
              value={updatedClient.city || ""}
              onChange={(e) =>
                setUpdatedClient({
                  ...updatedClient,
                  city: e.target.value,
                })
              }
            />
          ) : (
            <Typography>{client.city}</Typography>
          )}
        </Grid>

        <Grid item xs={6}>
          <Typography>Address:</Typography>
          {isEditing ? (
            <TextField
              value={updatedClient.address || ""}
              onChange={(e) =>
                setUpdatedClient({
                  ...updatedClient,
                  address: e.target.value,
                })
              }
            />
          ) : (
            <Typography>{client.address}</Typography>
          )}
        </Grid>

        <Grid item xs={6}>
          <Typography>Postal Code:</Typography>
          {isEditing ? (
            <TextField
              value={updatedClient.postal_code || ""}
              onChange={(e) =>
                setUpdatedClient({
                  ...updatedClient,
                  postal_code: e.target.value,
                })
              }
            />
          ) : (
            <Typography>{client.postal_code}</Typography>
          )}
        </Grid>
      </Grid>
      <Button onClick={toggleEditing}>{isEditing ? "Cancel" : "Edit"}</Button>
      {isEditing && <Button onClick={handleSaveChanges}>Save Changes</Button>}
    </Paper>
  );
};

export default ClientDetails;
