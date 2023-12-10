from app.models.base_model import BaseDBModel


from typing import Optional
from pydantic import BaseModel
from sqlmodel import Field, ForeignKey,Column

 
class FlightsCreate(BaseModel):
    price: float
    departure_time: str
    arrival_time: str


class FlightsUpdate(BaseModel):
    pass

class Flights(BaseDBModel, table=True):
    __tablename__ = "flights"

    id: Optional[int] = Field(default=None, primary_key=True, nullable=False)
    #TODO: add planeid, startairportid, endairportid
    plane_id: Optional[int] = Field(sa_column=ForeignKey("planes.id", ondelete="CASCADE"),default=None)
    start_airport_id: Optional[int] = Field(sa_column=ForeignKey("airports.id", ondelete="CASCADE"),default=None)
    destination_airport_id: Optional[int] = Field(sa_column=ForeignKey("airports.id", ondelete="CASCADE"),default=None)

    price: Optional[float] = Field(default=None)
    departure_time: Optional[str] = Field(default=None)
    arrival_time: Optional[str] = Field(default=None)

