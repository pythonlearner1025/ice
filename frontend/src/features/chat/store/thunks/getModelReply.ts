import {createAsyncThunk} from "@reduxjs/toolkit"
import {fetchModelReply} from "../chatAPI";
import {Msg} from "../types"

type ModelReply = {
    text: string
    images: Array<string>
}

export const getModelReply = createAsyncThunk(
    'chat/getModelReply',
    async (message: Msg) => {
        const response = await fetchModelReply(message)
        const {text, images}: ModelReply = response.data
        const replyMessage: Msg = {
            type: 'model',
            text: text,
            images: images
        }
        // this will return when return==fulfilled
        console.log('replyMsg',replyMessage)
        return replyMessage   
    }
)