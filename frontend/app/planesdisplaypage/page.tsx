"use client";
import React, { useEffect } from "react";
import { useReadAllPlanesApiV1PlanesGetQuery } from "@/lib/redux/api/planes";
import {
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

const PlaneList = () => {
  const {
    data: planesData,
    error,
    isLoading,
    refetch,
  } = useReadAllPlanesApiV1PlanesGetQuery();

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        All Planes
      </Typography>
      {isLoading && <CircularProgress />}
      {error && (
        <Typography variant="body1" color="error">
          {"Error: ${error.message}"}
        </Typography>
      )}
      {planesData && (
        <List>
          {planesData.map((plane) => (
            <ListItem key={plane.id}>
              <ListItemText
                primary={`Model: ${plane.model}`}
                secondary={`Airline: ${plane.airline}`}
              />
              {/* You can add more ListItemText components for additional details */}
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default PlaneList;
