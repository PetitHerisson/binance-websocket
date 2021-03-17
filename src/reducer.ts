import { createReducer } from '@reduxjs/toolkit'
import { combineReducers } from "redux";
import { createAction } from "@reduxjs/toolkit";
import { StateType, TradeType } from './types'

const initialState: StateType = {ask: [], bid: []}
export const MESSAGE_RECEIVED = createAction<TradeType[]>('messageReceived');

const reducer = createReducer(initialState, {
    [MESSAGE_RECEIVED.type]: (state, action) => {

        console.log(action.payload)
    }
})

export const rootReducer = combineReducers({
    reducer: reducer
})

export type RootState = ReturnType<typeof rootReducer>;