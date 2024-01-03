from app.crud.base import CRUDBase
from app.models.airports import Airports, AirportsCreate, AirportsUpdate

class CRUDAiports(CRUDBase[Airports, AirportsCreate, AirportsUpdate]):
    pass

crud_airports = CRUDAiports(Airports)