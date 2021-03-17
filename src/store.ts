import { configureStore } from "@reduxjs/toolkit"
import { rootReducer } from "./reducer"
import middleware from './middleware'
import { OPEN_SOCKET } from "./actions";

const store = configureStore({
    reducer: rootReducer,
    middleware: [middleware],
});

store.dispatch(OPEN_SOCKET());

export default store;