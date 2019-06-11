const estadoInicial = {
  counter: 0,
  appName: 'MyApp'
}
export const reducer = (state = estadoInicial, action) => {
  switch(action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1
      }
    case "DECREMENT":
        return {
          ...state,
          counter: state.counter - 1
        }
    case 'CHANGE_APP_NAME':
      return {
        ...state,
        appName: action.name
      }
    default:
      return state;
  }
}