
export const incrementarContador = () => {
  return {
    type: 'INCREMENT'
  }
}

export const decrementarContador = () => {
  return {
    type: 'DECREMENT'
  }
}

export const cambiarAppName = (name) => {
  return {
    type: 'CHANGE_APP_NAME',
    name
  }
}