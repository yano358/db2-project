import React, { useState, useEffect } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import {
  useReadAllAirportsApiV1AirportsreadAllGetQuery,
  Airports,
} from "@/lib/redux/api/airports";

interface SelectableAirportProps {
  label: string;
  onChange: (selectedAirportId: number | string) => void;
}

const SelectableAirportComponent: React.FC<SelectableAirportProps> = ({
  onChange,
  label,
}) => {
  const [airportsData, setAirportsData] = useState<Airports[]>([]);
  const { data: fetchedAirports, isLoading } =
    useReadAllAirportsApiV1AirportsreadAllGetQuery();

  useEffect(() => {
    if (fetchedAirports) {
      setAirportsData(fetchedAirports);
    }
  }, [fetchedAirports]);

  const handleAirportChange = (event: SelectChangeEvent<typeof undefined>) => {
    const selectedAirportId = event.target.value as string;
    onChange(selectedAirportId);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select onChange={handleAirportChange}>
        {airportsData.map((airport) => (
          <MenuItem key={airport.id} value={airport.id}>
            {airport.name} - {airport.city}, {airport.country}, id: {airport.id}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectableAirportComponent;
