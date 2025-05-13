from pydantic import BaseModel

class TickerModifierUpdate(BaseModel):
    ticker: str
    price: float  
    buy_modifier: float
    sell_modifier: float
