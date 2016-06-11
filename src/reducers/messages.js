export const Messages = (state, action) => {
  switch(action.type) {
    case 'ADD_MESSAGE':
      return {
        author: action.author,
        date: action.date,
        text: action.text
      }
  }
}
