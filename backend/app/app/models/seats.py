from app.models.base_model import BaseDBModel


from typing import Optional
from pydantic import BaseModel
from sqlmodel import Field, ForeignKey,Column


class SeatsCreate(BaseModel):
    taken_status: bool
    class_type: str


class SeatsUpdate(BaseModel):
    pass

class Seats(BaseDBModel, table=True):
    __tablename__ = "seats"
    
    id: Optional[int] = Field(default=None, primary_key=True, nullable=False)
    plane_id: Optional[int] = Field(sa_column=ForeignKey("planes.id", ondelete="CASCADE"),default=None)


    taken_status: Optional[bool] = Field(default=False)
    class_type: Optional[str] = Field(default=None) 