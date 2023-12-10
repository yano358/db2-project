from app.models.base_model import BaseDBModel


from typing import Optional
from pydantic import BaseModel
from sqlmodel import Field

class PlanesCreate(BaseModel):
    pass

class PlanesUpdate(BaseModel):
    pass

class Planes(BaseDBModel, table=True):
    __tablename__ = "planes"

    id: Optional[int] = Field(default=None, primary_key=True, nullable=False)

    model: Optional[str] = Field(default=None)
    airline: Optional[str] = Field(default=None)