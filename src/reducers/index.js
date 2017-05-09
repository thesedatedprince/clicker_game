export default (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1
    case 'SECOND_LEVEL':
      return state + 5
    case 'THIRD_LEVEL':
      return state + 20
    default:
      return state
  }
}
