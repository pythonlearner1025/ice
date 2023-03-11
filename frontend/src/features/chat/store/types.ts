
// url to images in database
export type Msg = {
    type: 'user' | 'model'
    text: string
    images: Array<string>
}

export interface ChatState {
    messages: Array<Msg>
    status: 'idle' | 'loading' | 'error'
}