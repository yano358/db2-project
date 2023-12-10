from fastapi import APIRouter, Depends
from sqlmodel import Session

from app.models.planes import Planes, PlanesCreate
from app.crud.crud_planes import crud_planes
from app.core.db import get_session

router = APIRouter()

@router.post("", response_model=Planes)
async def create_planes(
    planes_in: PlanesCreate,
    db_session: Session = Depends(get_session),
) -> Planes:
    planes = crud_planes.create(db=db_session, obj_in=planes_in)
    return planes

@router.delete("/{planes_id}", response_model=None)
async def delete_planes(
    planes_id: int,
    db_session: Session = Depends(get_session),
) -> None:
    crud_planes.remove(db=db_session, id=planes_id)
    return None