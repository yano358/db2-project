"use client";
import React from "react";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";

export default function TicketCreationPage() {
  const [luggageType, setLuggageType] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setLuggageType(event.target.value as string);
  };

  return (
    <>
      <Stack spacing={2}>
        <Typography variant="h1">Nowy Bilet</Typography>
        <Stack spacing={2}>
          <Box>
            <FormControl fullWidth>
              <InputLabel id="select-label-luggage">Bagaz</InputLabel>
              <Select
                labelId="select-label-luggage"
                id="select-luggage"
                value={luggageType}
                label="Bagaz"
                onChange={handleChange}
              >
                <MenuItem value={"Podreczny"}>Podreczny</MenuItem>
                <MenuItem value={"Nadany"}>Nadany</MenuItem>
                <MenuItem value={"Podreczny i Nadany"}>
                  Podreczny i Nadany
                </MenuItem>
              </Select>
            </FormControl>
          </Box>

          <TextField label="Description" />
          <TextField label="Priority" />
          <TextField label="Status" />
          <TextField label="Type" />
          <TextField label="Project" />
          <TextField label="Author" />
          <TextField label="Assignee" />
          <Button variant="contained">Dodaj</Button>
        </Stack>
      </Stack>
    </>
  );
}
