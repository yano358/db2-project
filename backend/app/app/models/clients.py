from app.models.base_model import BaseDBModel


from typing import Optional
from pydantic import BaseModel
from sqlmodel import Field, Column, ForeignKey


class ClientsCreate(BaseModel):
      first_name: str
      last_name: str
      country: str
      city: str
      address: str
      postal_code: str

class ClientsUpdate(BaseModel):
    pass
 
class Clients(BaseDBModel, table=True):
    __tablename__ = "clients"

    id: Optional[int] = Field(default=None, primary_key=True, nullable=False)
    user_id: Optional[int] = Field(default=None, sa_column=Column(ForeignKey("user.id", ondelete="CASCADE")))

    first_name: Optional[str] = Field(default=None)
    last_name: Optional[str] = Field(default=None)
    country: Optional[str] = Field(default=None)
    city: Optional[str] = Field(default=None)
    address: Optional[str] = Field(default=None) #street+house/flat number
    postal_code: Optional[str] = Field(default=None)