import { createReducer } from '@reduxjs/toolkit'
import { combineReducers } from "redux";
import { createAction } from "@reduxjs/toolkit";
import { PayloadType, StateType } from './types'

const initialState: StateType = {
    streams: [],
    status: false
}
export const MESSAGE_RECEIVED = createAction<PayloadType>('messageReceived');
export const WEBSOCKET_CONNECTED = createAction<Boolean>('websocketConnected');

const reducer = createReducer(initialState, {
    [MESSAGE_RECEIVED.type]: (state, action) => {
        const { streamName, ask, bid, time, open, close } = action.payload;
        const { streams } = state
        const streamNames = streams.map(stream => stream.streamName);
        const index = streamNames.indexOf(streamName)
        console.log(action.payload)
        if (index !== -1) {
            streams.forEach(stream => {
                if (stream.streamName === streamName) {
                    stream.ask.push(ask)
                    stream.bid.push(bid)
                    stream.open.push(open)
                    stream.close.push(close)
                    stream.time.push(time)
                }
                if (stream.ask.length > 11) {
                    stream.ask.splice(0, 1)
                    stream.bid.splice(0, 1)
                    stream.open.splice(0, 1)
                    stream.close.splice(0, 1)
                    stream.time.splice(0, 1)
                }
            })
        } else {
            streams.push({
                streamName,
                ask: [ask],
                bid: [bid],
                close: [close],
                open: [open],
                time: [time]
            })
        }

        // console.log(stream)
        

    },
    [WEBSOCKET_CONNECTED.type]: (state, action) => {
        state.status = action.payload;
    }
})

export const rootReducer = combineReducers({
    reducer: reducer
})

export type RootState = ReturnType<typeof rootReducer>;