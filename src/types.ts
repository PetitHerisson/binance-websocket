export interface TradeType {
    price: number;
    depth: number;
}

export interface StateType {
    ask: TradeType[];
    bid: TradeType[];
}
