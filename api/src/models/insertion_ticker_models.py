from pydantic import BaseModel, Field

class TickerModifierUpdate(BaseModel):
    ticker: str
    buy_modifier: float
    sell_modifier: float

class TickerPriceUpdate(BaseModel):
    ticker: str                     # "RUB(cash settlement)"
    new_buy: int | float = Field(gt=0)
    new_sell: int | float = Field(gt=0)