from app.models.base_model import BaseDBModel

from app.models.luggage import Luggage
from app.models.flights import Flights
from app.models.seats import Seats
from app.models.clients import Clients
from app.models.planes import Planes
from app.models.airports import Airports

from typing import Optional
from pydantic import BaseModel
from sqlmodel import Field, ForeignKey

class CustomTicketResponse(BaseModel):
    luggage_details: Luggage
    flight_details: Flights
    seat_details: Seats
    client_details: Clients
    plane_details: Planes
    start_airport_details: Airports
    destination_airport_details: Airports


class TicketsCreate(BaseModel):
    client_id: int
    luggage_id: int
    flight_id: int
    seat_id: int

class TicketsUpdate(BaseModel):
    pass

class Tickets(BaseDBModel, table=True):
    __tablename__ = "tickets"

    id: Optional[int] = Field(default=None, primary_key=True , nullable=False)
    
    client_id: Optional[int] = Field(sa_column=ForeignKey("clients.id" , ondelete="CASCADE"),default=None)
    luggage_id: Optional[int] = Field(sa_column=ForeignKey("luggage.id" , ondelete="CASCADE"),default=None)
    flight_id: Optional[int] = Field(sa_column=ForeignKey("flights.id" , ondelete="CASCADE"),default=None)
    seat_id: Optional[int] = Field(sa_column=ForeignKey("seats.id" , ondelete="CASCADE"),default=None)