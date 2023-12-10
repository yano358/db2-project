from app.models.base_model import BaseDBModel


from typing import Optional
from pydantic import BaseModel
from sqlmodel import Field

class AirportsCreate(BaseModel):
    pass

class AirportsUpdate(BaseModel):
    pass

class Airports(BaseDBModel, table=True):
    __tablename__ = "airports"

    id: Optional[int] = Field(default=None, primary_key=True , nullable=False)

    name: Optional[str] = Field(default=None)
    city: Optional[str] = Field(default=None)
    country: Optional[str] = Field(default=None)
    