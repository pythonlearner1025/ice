import { Msg } from "./types"

export const saveMessage = async (message: Msg) => {
    console.log('saving to database...')
    switch (message.type) {
        case 'user': {

            return
        }
        case 'model': {

            return
        }
    }
}

/*
    API call to backend to fetch reply to user's most recent message 
        - use rmsg can be either "/create," "edit," or "prompt" type of message 
        - if "edit," the edit always refers to the most recent output(s) by model
        - if "create," generate a new image and return
        - if "prompt," act as a chatbot, with history of up to X past messages
export const fetchModelReply = async (message: Msg): Promise<{data: Msg}> => {
    const response = await fetch('')
    const result = await response.json()
    return result
}

*/

// test function to simulate API call to backend
export const fetchModelReply = async (message: Msg): Promise<{ data: Msg }> => {
    return new Promise((resolve) => {
      // Simulate a 3-second delay using setInterval
      const intervalId = setInterval(() => {
        clearInterval(intervalId);
  
        // Return the desired response object
        resolve({data: { type: 'model', text: 'reply from model', images: [] }});
      }, 3000);
    });
  };
