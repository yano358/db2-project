"use client";
import { useState, useEffect } from "react";
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
//create ticket
import {
  useCreateApiV1TicketsPostMutation,
  TicketsCreate,
} from "@/lib/redux/api/tickets";

import AvailableSeatsComponent from "../components/AvailableSeatsComponent";
import SelectableFlightComponent from "../components/SelectableFlightComponent";
import TicketCreationButton from "../components/TicketCreationComponent";

export default function TicketCreationPage() {
  const [luggageType, setLuggageType] = useState("");
  const [flightId, setFlightId] = useState<number | string>("");
  const [planeId, setPlaneId] = useState<number | string>("");
  const [seatId, setSeatId] = useState<number | string>("");

  const handleChangeLuggage = (event: SelectChangeEvent) => {
    setLuggageType(event.target.value as string);
  };

  const handleChangeFlight = (selectedFlightId: [string, string]) => {
    setFlightId(selectedFlightId[0]);
    setPlaneId(selectedFlightId[1]);
  };

  const handleChangeSeat = (selectedSeatId: string) => {
    setSeatId(selectedSeatId);
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
                onChange={handleChangeLuggage}
              >
                <MenuItem value={2}>Podreczny</MenuItem>
                <MenuItem value={3}>Nadany</MenuItem>
                <MenuItem value={4}>Podreczny i Nadany</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box>
            <SelectableFlightComponent
              label="Lot"
              onChange={handleChangeFlight}
            />
          </Box>

          <Box>
            <AvailableSeatsComponent
              flightId={Number(planeId)}
              onChange={handleChangeSeat}
            />
          </Box>

          <TicketCreationButton
            flightId={String(flightId)}
            seatId={String(seatId)}
            luggageId={String(luggageType)}
          ></TicketCreationButton>
        </Stack>
      </Stack>
    </>
  );
}
