const initialState = {
  author: '',
  date: '',
  text: ''
}

export default function Messages(state = initialState, action) {
  switch(action.type) {
    case 'ADD_MESSAGE':
      return {
        author: action.author,
        date: action.date,
        text: action.text
      }
    default:
      return state
  }
}
