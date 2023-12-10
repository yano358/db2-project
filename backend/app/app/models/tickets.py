from app.models.base_model import BaseDBModel


from typing import Optional
from pydantic import BaseModel
from sqlmodel import Field, ForeignKey,Column


class TicketsCreate(BaseModel):
    pass

class TicketsUpdate(BaseModel):
    pass

class Tickets(BaseDBModel, table=True):
    __tablename__ = "tickets"

    id: Optional[int] = Field(default=None, primary_key=True , nullable=False)
    
    client_id: Optional[int] = Field(sa_column=ForeignKey("clients.id" , ondelete="CASCADE"),default=None)
    luggage_id: Optional[int] = Field(sa_column=ForeignKey("luggage.id" , ondelete="CASCADE"),default=None)
    flight_id: Optional[int] = Field(sa_column=ForeignKey("flights.id" , ondelete="CASCADE"),default=None)
    seat_id: Optional[int] = Field(sa_column=ForeignKey("seats.id" , ondelete="CASCADE"),default=None)