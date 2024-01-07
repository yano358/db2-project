import React, { useState, useEffect } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  CircularProgress,
  SelectChangeEvent,
} from "@mui/material";
import {
  Seats,
  useGetSeatsForFlightApiV1SeatsFlightIdGetQuery,
} from "@/lib/redux/api/seats";

interface AvailableSeatsProps {
  flightId: number;
  onChange: (selectedSeatId: string) => void;
}

const AvailableSeatsComponent: React.FC<AvailableSeatsProps> = ({
  flightId,
  onChange,
}) => {
  const [seatsData, setSeatsData] = useState<Seats[]>([]);
  const { data: fetchedSeats, isLoading: seatsLoading } =
    useGetSeatsForFlightApiV1SeatsFlightIdGetQuery({ flightId });

  useEffect(() => {
    if (fetchedSeats) {
      setSeatsData(fetchedSeats);
    }
  }, [fetchedSeats]);

  const availableSeats = seatsData.filter((seat) => !seat.taken_status);

  const handleSeatchange = (event: SelectChangeEvent<typeof undefined>) => {
    const selectedSeatId = event.target.value as string;
    onChange(selectedSeatId);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Select Seat</InputLabel>
      <Select onChange={handleSeatchange}>
        {seatsLoading ? (
          <MenuItem disabled>
            <CircularProgress size={20} />
          </MenuItem>
        ) : (
          availableSeats.map((seat) => (
            <MenuItem key={seat.id} value={seat.id}>
              Seat Number: {seat.id}
            </MenuItem>
          ))
        )}
      </Select>
    </FormControl>
  );
};

export default AvailableSeatsComponent;
