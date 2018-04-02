const initialState = {
  name: '',
  email: '',
  ticketType: '',
  food: false,
  agreeTerm: false,
  countDown: ''
}

const SET_FIELD = 'SET_FIELD'
const RESET_FIELD = 'RESET_FIELD'
const RESET_FIELD_FULFILLED = 'RESET_FIELD_FULFILLED'

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FIELD:
      return {
        ...state,
        [action.key]: action.value //set state follow with key
      }
    case RESET_FIELD_FULFILLED:
      return { ...initialState, countDown: state.countDown }
    default:
      // must have
      return state
  }
}

export const setField = (key, value) => ({
  type: SET_FIELD,
  key,
  value
})

export const resetField = () => ({
  type: RESET_FIELD,
  payload: new Promise((resolve, reject) => {
    setTimeout(() => resolve(initialState), 5000)
  })
})
