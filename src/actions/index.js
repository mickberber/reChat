let MSGID = 0;

export const addMessage = (MSG) => {
  return {
    type: 'ADD_MESSAGE',
    id: MSGID++,
    MSG
  }
}
