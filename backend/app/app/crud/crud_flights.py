from app.crud.base import CRUDBase
from app.models.flights import Flights, FlightsCreate, FlightsUpdate

class CRUDFlights(CRUDBase[Flights, FlightsCreate, FlightsUpdate]):
    def get_all(self, db):
        return db.query(self.model).all()
    
crud_flights = CRUDFlights(Flights)