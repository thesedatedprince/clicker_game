export default (state = 100, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state - 1
    case 'SECOND_LEVEL':
      return state - 5
    case 'THIRD_LEVEL':
      return state - 20
    case 'SET_ZERO':
      return state = 0
    default:
      return state
  }
}
