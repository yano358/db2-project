from app.crud.base import CRUDBase
from app.models.seats import Seats, SeatsCreate, SeatsUpdate

class CRUDSeats(CRUDBase[Seats, SeatsCreate, SeatsUpdate]):
    pass

crud_seats = CRUDSeats(Seats)