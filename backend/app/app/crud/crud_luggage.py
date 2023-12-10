from app.crud.base import CRUDBase
from app.models.luggage import Luggage, LuggageCreate, LuggageUpdate

class CRUDLuggage(CRUDBase[Luggage, LuggageCreate, LuggageUpdate]):
    pass

crud_luggage = CRUDLuggage(Luggage)