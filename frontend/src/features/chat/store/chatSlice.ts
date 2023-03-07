import {createSlice} from "@reduxjs/toolkit"
import {Msg, ChatState} from "./types"
import {getModelReply} from "./thunks/getModelReply"

const initialState: ChatState = {
    messages: [],
    status: 'idle'
}

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        // add user Message
        addUserMessage: (state, action) => {
            const message: Msg = action.payload
            state.messages.push(message)
        }
    },

    extraReducers: (builder) => {
        builder
        .addCase(getModelReply.pending, (state) => {
            const message: Msg = {
                type: 'model',
                text: 'loading...',
                images: []
            }
            state.messages.push(message)
            state.status = 'loading'
        })
        .addCase(getModelReply.fulfilled, (state,action)=> {
            const message: Msg = action.payload
            state.status = 'idle'
            state.messages = state.messages.slice(0, state.messages.length-1)
            state.messages.push(message)
        })
        .addCase(getModelReply.rejected, (state) => {
            state.status = 'error'
        })
    }
})

export const {
    addUserMessage
} = chatSlice.actions

export default chatSlice.reducer