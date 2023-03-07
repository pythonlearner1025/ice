
// url to images in database
export type Message = {
    type: 'user' | 'model'
    text: string
    images: Array<string>
}

export interface ChatState {
    messages: Array<Message>
    status: 'idle' | 'loading' | 'error'
}