import React from "react";

import { useGetFilteredTicketsApiV1TicketsgetFilteredTicketsGetQuery } from "@/lib/redux/api/tickets";
import SignOutButton from "../components/SignOutComponent";

//luggage: 2  - carry on , 3 -  check-in , 4 - both
//users: get from current user
//flight: get from flights
const DisplayAllTickets: React.FC = () => {
  return (
    <div>
      <h1>Ticket Information</h1>
      <SignOutButton />
    </div>
  );
};

export default DisplayAllTickets;
