from pydantic import BaseModel, Field

class XeCurrencyConvertedToListResponseModel(BaseModel):
    terms: str
    privacy: str
    to: str
    amount: int | float
    timestamp: str
    currencies_list: list = Field(..., alias='from')

class XeCurrencyConvertedFromListResponseModel(BaseModel):
    terms: str
    privacy: str
    from_currency: str = Field(..., alias='from')
    amount: int | float
    timestamp: str
    to: list