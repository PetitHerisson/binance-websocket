import { AnyAction, Middleware } from '@reduxjs/toolkit'
import { OPEN_SOCKET } from './actions';
import { MESSAGE_RECEIVED } from './reducer'
import { TradeType } from './types';

const middleware: Middleware = ({ dispatch }) => (next: any) => (action: AnyAction) => {
    const { type } = action;
    if (type === OPEN_SOCKET.type) {
        const endpoint = 'wss://stream.binance.com:9443/ws/bnbbtc@depth';
        const payload = {
            "method": "SUBSCRIBE",
            "params": [
                "btcusdt@depth"
            ],
            "id": 1
        }
        const socket = new WebSocket(endpoint);

        // Connection opened
        socket.onopen = () => {
            console.log("Here's some text that the server is urgently awaiting!")
            socket.send(JSON.stringify(payload))
        };
        socket.onmessage = (event) => {
            const data = JSON.parse(event.data)
            const allAsks = data.a; // undefined
            let highestAsk = {} as TradeType;
            // allAsks.forEach((a: string[]) => {
            //     if(parseFloat(a[1]) > highestAsk.depth){
            //         highestAsk.depth = parseFloat(a[1]);
            //         highestAsk.price = parseFloat(a[0]);
            //         console.log(highestAsk)
            //     }
            // });      
            // dispatch(MESSAGE_RECEIVED())
        }
    }
}
export default middleware;