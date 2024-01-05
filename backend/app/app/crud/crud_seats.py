from app.crud.base import CRUDBase
from app.models.seats import Seats, SeatsCreate, SeatsUpdate

class CRUDSeats(CRUDBase[Seats, SeatsCreate, SeatsUpdate]):
    
    def get_all(self, db):
        return db.query(self.model).all()

crud_seats = CRUDSeats(Seats)