export default (state = 100, action) => {
  switch(action.type) {
    case 'INCREMENT':
      if(state - 1 > 0 ){
        return state - 1
      } else {
        return state = 0
      }
    case 'SECOND_LEVEL':
      if(state - 5 > 0 ){
        return state - 5
      } else {
        return state = 0
      }
    case 'THIRD_LEVEL':
      if(state - 20 > 0 ){
        return state - 20
      } else {
        return state = 0
      }
    default:
      return state
  }
}
