from app.crud.base import CRUDBase
from app.models.luggage import Luggage, LuggageCreate, LuggageUpdate
from sqlalchemy.orm import Session

class CRUDLuggage(CRUDBase[Luggage, LuggageCreate, LuggageUpdate]):
    def get_all(self, db: Session):
        return db.query(self.model).all()

crud_luggage = CRUDLuggage(Luggage)