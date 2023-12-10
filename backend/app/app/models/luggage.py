from app.models.base_model import BaseDBModel


from typing import Optional
from pydantic import BaseModel
from sqlmodel import Field


class LuggageCreate(BaseModel):
    luggage_type: str

class LuggageUpdate(BaseModel):
    pass

class Luggage(BaseDBModel, table=True):
    __tablename__ = "luggage"
    id: Optional[int] = Field(default=None, primary_key=True , nullable=False)
    
    luggage_type: Optional[str] = Field(default=None) 