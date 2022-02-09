import { AnyAction, Middleware } from '@reduxjs/toolkit'
import { OPEN_SOCKET } from './actions';
import { MESSAGE_RECEIVED, WEBSOCKET_CONNECTED } from './reducer'

const middleware: Middleware = ({ dispatch }) => (next: any) => (action: AnyAction) => {
    const { type } = action;
    next(action);
    if (type === OPEN_SOCKET.type) {
        const streams = ['ethbtc@ticker', 'ltcbtc@ticker', 'bnbbtc@ticker']
        const endpoint = 'wss://stream.binance.com:9443/ws/' + streams.join('/');
        // /stream?streams=<streamName1>/<streamName2>/<streamName3>
        const payload = {
            "method": "SUBSCRIBE",
            "params": [
                "ethbtc@ticker",
                "ltcbtc@ticker",
                'bnbbtc@ticker',
                // 'wavesbtc@ticker',
            ],
            "id": 1
        }

        const socket = new WebSocket(endpoint);

        // Connection opened
        socket.onopen = () => {
            socket.send(JSON.stringify(payload));
            dispatch(WEBSOCKET_CONNECTED(true));
        };
        socket.onerror = () => {
            dispatch(WEBSOCKET_CONNECTED(false));
        }
        socket.onclose = () => {
            dispatch(WEBSOCKET_CONNECTED(false));
        }
        socket.onmessage = (event) => {
            const data = JSON.parse(event.data)
            // console.log(data)
            const highestAsk = parseFloat(data.a)
            const highestBid = parseFloat(data.b)
            const open = parseFloat(data.o);
            const close = parseFloat(data.c);
            const date = new Date(data.E * 1000);
            const time = ('0' + date.getHours()).substr(-2) + 
                        ':' + ('0' + date.getMinutes()).substr(-2) + 
                        ':' + ('0' + date.getSeconds()).substr(-2);
            if (time !== "aN:aN:aN") {
                dispatch(MESSAGE_RECEIVED({ streamName: data.s, ask: highestAsk, bid: highestBid, time, open, close }))
            }
        }
    }
}
export default middleware;