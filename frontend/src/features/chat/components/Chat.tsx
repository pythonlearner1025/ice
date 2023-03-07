import {useAppSelector} from "../../../storeHooks"
import {ChatState} from "../store/types"
import Message from "./Message"

const getChatState = (state: {chat: ChatState}) => state.chat

// TODO: show "loading" message when model is loading
const Chat = () => {
    // TODO cache and save messages in localstorage
    const {messages, status} = useAppSelector(getChatState)
    
    return (
        <>
            <div style={{'color': 'green'}}>Chat</div>
            {messages.map((message,i) => {
                return(
                <Message 
                key={i} 
                message={message}/>
                )
            })}
        </>
    )
}

export default Chat;