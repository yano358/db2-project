"use client";
import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import {
  useCreatePlanesApiV1PlanesPostMutation,
  PlanesCreate,
} from "@/lib/redux/api/planes";

const CreatePlaneComponent: React.FC = () => {
  const [planeData, setPlaneData] = useState<PlanesCreate>({
    model: "",
    airline: "",
  });
  const [createPlaneMutation] = useCreatePlanesApiV1PlanesPostMutation();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPlaneData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleButtonClick = async () => {
    try {
      // Make an API call to create a plane with the planeData
      const response = await createPlaneMutation({ planesCreate: planeData });
      // Reset the input values after successful submission
      setPlaneData({ model: "", airline: "" });
    } catch (error) {
      // Handle error if the API call fails
      console.error("Error creating plane:", error);
    }
  };

  return (
    <Box sx={{ "& > :not(style)": { marginBottom: 2 } }}>
      <TextField
        label="Model"
        name="model"
        value={planeData.model}
        onChange={handleInputChange}
        fullWidth
        variant="outlined"
      />
      <TextField
        label="Airline"
        name="airline"
        value={planeData.airline}
        onChange={handleInputChange}
        fullWidth
        variant="outlined"
      />
      <Button
        variant="contained"
        onClick={handleButtonClick}
        disabled={!planeData.model || !planeData.airline}
      >
        Create Plane
      </Button>
    </Box>
  );
};

export default CreatePlaneComponent;
