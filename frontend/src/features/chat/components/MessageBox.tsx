import { useState } from 'react';
import { useAppDispatch } from '../../../storeHooks';
import { addUserMessage } from '../store/chatSlice';
import { getModelReply } from "../store/thunks/getModelReply"
import { saveMessage } from '../store/chatAPI'
import { Msg } from "../store/types"

const MessageBox = () => {
  const dispatch = useAppDispatch();
  const [messageText, setMessageText] = useState<string>('');

  const sendMessage = () => {
    if (messageText) {
      const message: Msg = {
          type: 'user',
          text: messageText,
          images: []
      }
      dispatch(addUserMessage(message));
      // request backend to save user-sent message
      saveMessage(message)
      // model reply already saved in backend
      dispatch(getModelReply(message));
      setMessageText('');
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <>
      <div>
        <input
          type='text'
          value={messageText}
          onChange={(event) => setMessageText(event.target.value)}
          onKeyPress={handleKeyPress}
        />
      </div>
    </>
  );
};

export default MessageBox;
