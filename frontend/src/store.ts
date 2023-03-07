import {configureStore, ThunkAction, Action} from "@reduxjs/toolkit"
import chatReducer from "./features/chat/store/chatSlice"

// one can later combine many reducers like so:
// https://github.com/invoke-ai/InvokeAI/blob/main/invokeai/frontend/web/src/app/store.ts

export const makeStore = () => {
    return configureStore({
        reducer: {chat: chatReducer}
    })
}

const store = makeStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store

