import uuid
from typing import Optional
from pydantic import BaseModel, Field

class Apiary(BaseModel):
    id: str = Field(default_factory=uuid.uuid4, alias="_id")
    hiveIndex: int = Field(1)
    nHives: int = Field(1)

    class Config:
        allow_population_by_field_name = True
        schema_extra = {
            "example": {
                "_id": "066de609-b04a-4b30-b46c-32537c7f1f6e",
                "hiveIndex": 13,
                "nHives" : 3
            }
        }

class ApiaryUpdate(BaseModel):
    hiveIndex: Optional[int]
    nHives: Optional[int]

    class Config:
        schema_extra = {
            "example": {
                "hiveIndex": 3,
                "nHives": 4
            }
        }