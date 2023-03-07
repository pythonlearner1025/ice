import {Msg} from "../store/types"

interface MessageProps {
    message: Msg
}

const Message = (props: MessageProps) => {
    return (
        <>
            <div>{props.message.text}</div>
        </>
    )
}

export default Message