import React, { useState } from "react";
import {
  useCreateClientApiV1ClientsPostMutation,
  ClientsCreate,
} from "@/lib/redux/api/clients";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";

type ClientRegistrationFormProps = {
  user_id: number | undefined;
  open: boolean;
  onClose: () => void;
};

const ClientRegistrationForm: React.FC<ClientRegistrationFormProps> = ({
  user_id,
  onClose,
  open,
}) => {
  const initialClientData: ClientsCreate = {
    user_id: Number(user_id),
    first_name: "",
    last_name: "",
    country: "",
    city: "",
    address: "",
    postal_code: "",
  };

  const [clientData, setClientData] = useState<ClientsCreate>({
    ...initialClientData,
  });

  const [createClientMutation] = useCreateClientApiV1ClientsPostMutation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setClientData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const response = await createClientMutation({
        clientsCreate: clientData,
      });
      onClose();
      //refetch();
    } catch (error) {
      console.error("Error creating client:", error);
    }
  };

  const handleClose = () => {
    setClientData({ ...initialClientData, user_id: Number(user_id) });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Register New Client</DialogTitle>
      <DialogContent>
        <TextField
          label="First Name"
          name="first_name"
          value={clientData.first_name}
          onChange={handleInputChange}
        />
        <TextField
          label="Last Name"
          name="last_name"
          value={clientData.last_name}
          onChange={handleInputChange}
        />
        <TextField
          label="Country"
          name="country"
          value={clientData.country}
          onChange={handleInputChange}
        />
        <TextField
          label="City"
          name="city"
          value={clientData.city}
          onChange={handleInputChange}
        />
        <TextField
          label="Address"
          name="address"
          value={clientData.address}
          onChange={handleInputChange}
        />
        <TextField
          label="Postal Code"
          name="postal_code"
          value={clientData.postal_code}
          onChange={handleInputChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={handleSave}
          color="primary"
          disabled={
            !clientData.first_name ||
            !clientData.last_name ||
            !clientData.country ||
            !clientData.city ||
            !clientData.address ||
            !clientData.postal_code
          }
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ClientRegistrationForm;
