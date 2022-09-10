from fastapi import APIRouter, Body, Request, Response, HTTPException, status
from fastapi.encoders import jsonable_encoder
from typing import List

from models import Apiary, ApiaryUpdate

router = APIRouter()

@router.post("/", response_description="Create a new apiary", status_code=status.HTTP_201_CREATED, response_model=Apiary)
def create_apiary(request: Request, apiary: Apiary = Body(...)):
    apiary = jsonable_encoder(apiary)
    new_apiary = request.app.database["apiaries"].insert_one(apiary)
    created_apiary = request.app.database["apiaries"].find_one(
        {"_id": new_apiary.inserted_id}
    )

    return created_apiary


@router.get("/", response_description="List all apiaries", response_model=List[Apiary])
def list_apiaries(request: Request):
    apiaries = list(request.app.database["apiaries"].find(limit=100))
    
    return apiaries


@router.get("/{id}", response_description="Get a single apiary by id", response_model=Apiary)
def find_book(id: str, request: Request):
    # := is actually a valid operator that allows for assignment of variables within expressions
    if (apiary := request.app.database["apiaries"].find_one({"_id": id})) is not None:

        return apiary

    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Apiary with ID {id} not found")


'''
If there are no fields in the book object, we're just returning the existing book. 
However, if the book is not found, we're raising an HTTPException with a 404 Not Found status code.
'''
@router.put("/{id}", response_description="Update an apiary", response_model=Apiary)
def update_apiary(id: str, request: Request, apiary: ApiaryUpdate = Body(...)):
    apiary = {k: v for k, v in apiary.dict().items() if v is not None}
    if len(apiary) >= 1:
        update_result = request.app.database["apiaries"].update_one(
            {"_id": id}, {"$set": apiary}
        )

        if update_result.modified_count == 0:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Apiary with ID {id} not found")

    if (
        existing_apiary := request.app.database["apiaries"].find_one({"_id": id})
    ) is not None:
        return existing_apiary

    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Apiary with ID {id} not found")


@router.delete("/{id}", response_description="Delete an apiary")
def delete_book(id: str, request: Request, response: Response):

    delete_result = request.app.database["apiaries"].delete_one({"_id": id})

    if delete_result.deleted_count == 1:
        response.status_code = status.HTTP_204_NO_CONTENT
        return response

    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Apiary with ID {id} not found")