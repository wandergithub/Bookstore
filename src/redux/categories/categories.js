//Actions
const CHECKED_STATUS = 'CHECKED_STATUS';

//Reducer
export default function categoriesreducer(state = [], action) {
  switch(action.type) {
    case CHECKED_STATUS:
      return action.message
    default:
      return state
  }
}

//Actions creators
export const checkStatus = (message="Under construction") => {
  return {
    type: CHECKED_STATUS,
    message: message
  }
};