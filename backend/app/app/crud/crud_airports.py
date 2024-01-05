from app.crud.base import CRUDBase
from app.models.airports import Airports, AirportsCreate, AirportsUpdate

class CRUDAiports(CRUDBase[Airports, AirportsCreate, AirportsUpdate]):
    def get_all(self, db):
        return db.query(self.model).all()

crud_airports = CRUDAiports(Airports)