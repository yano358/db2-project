from app.models.planes import Planes, PlanesCreate, PlanesUpdate
from app.crud.base import CRUDBase

class CRUDPlanes(CRUDBase[Planes, PlanesCreate, PlanesUpdate]):
    def get_all(self, db):
        return db.query(self.model).all()

crud_planes = CRUDPlanes(Planes)