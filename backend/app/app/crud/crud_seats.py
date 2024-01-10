from app.crud.base import CRUDBase
from app.models.seats import Seats, SeatsCreate, SeatsUpdate


class CRUDSeats(CRUDBase[Seats, SeatsCreate, SeatsUpdate]):
    
    def get_all(self, db):
        return db.query(self.model).all()
    
    def get_seats_for_plane(self, db, plane_id):
        return db.query(self.model).filter(self.model.plane_id == plane_id).all()
    
    

crud_seats = CRUDSeats(Seats)