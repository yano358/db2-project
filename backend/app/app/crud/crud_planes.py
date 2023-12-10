from app.models.planes import Planes, PlanesCreate, PlanesUpdate
from app.crud.base import CRUDBase

class CRUDPlanes(CRUDBase[Planes, PlanesCreate, PlanesUpdate]):
    pass

crud_planes = CRUDPlanes(Planes)