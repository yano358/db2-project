import React, { useState, useEffect } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import {
  useReadAllPlanesApiV1PlanesGetQuery,
  Planes,
} from "@/lib/redux/api/planes";

interface SelectablePlaneProps {
  onChange: (selectedPlaneId: number | string) => void;
}

const SelectablePlaneComponent: React.FC<SelectablePlaneProps> = ({
  onChange,
}) => {
  const [planesData, setPlanesData] = useState<Planes[]>([]);
  const { data: fetchedPlanes, isLoading } =
    useReadAllPlanesApiV1PlanesGetQuery();

  useEffect(() => {
    if (fetchedPlanes) {
      setPlanesData(fetchedPlanes);
    }
  }, [fetchedPlanes]);

  const handlePlaneChange = (event: SelectChangeEvent<typeof undefined>) => {
    const selectedPlaneId = event.target.value as string;
    onChange(selectedPlaneId);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Select Plane</InputLabel>
      <Select onChange={handlePlaneChange}>
        {isLoading && <MenuItem disabled>Loading...</MenuItem>}
        {planesData.map((plane) => (
          <MenuItem key={plane.id} value={plane.id}>
            {plane.model} - {plane.airline}, id: {plane.id}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectablePlaneComponent;
