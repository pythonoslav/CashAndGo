from pydantic import BaseModel, Field

class XeCurrencyConvertedListResponseModel(BaseModel):
    terms: str
    privacy: str
    to: str
    amount: int | float
    timestamp: str
    currencies_list: list = Field(..., alias='from')
