from app.models.base_model import BaseDBModel


from typing import Optional
from pydantic import BaseModel
from sqlmodel import Field, ForeignKey
from app.models.airports import Airports
from app.models.planes import Planes


 
class FlightsCreate(BaseModel):
    plane_id: int
    start_airport_id: int
    destination_airport_id: int
    price: float
    departure_time: str
    arrival_time: str

class CustomFlights(BaseModel):
    id: int
    price: float
    departure_time: str
    arrival_time: str
    plane_details: Planes
    start_airport_details: Airports
    destination_airport_details: Airports


class FlightsUpdate(BaseModel):
    pass

class Flights(BaseDBModel, table=True):
    __tablename__ = "flights"

    id: Optional[int] = Field(default=None, primary_key=True, nullable=False)
    plane_id: Optional[int] = Field(sa_column=ForeignKey("planes.id", ondelete="CASCADE"),default=None)
    start_airport_id: Optional[int] = Field(sa_column=ForeignKey("airports.id", ondelete="CASCADE"),default=None)
    destination_airport_id: Optional[int] = Field(sa_column=ForeignKey("airports.id", ondelete="CASCADE"),default=None)

    price: Optional[float] = Field(default=None)
    departure_time: Optional[str] = Field(default=None)
    arrival_time: Optional[str] = Field(default=None)

