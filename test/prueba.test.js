// Esta función regresa una suma
const suma = (num1, num2) => {
  if (!num1 || !num2) {
    return undefined
  }

  return num1 + num2
}

const resta = (num1, num2) => {
  if (!num1 || !num2) {
    return undefined
  }

  return num1 - num2
}
describe('Funcion suma', () => {
  test('nombre de la prueba', () => {
    const result = suma(4, 4) // Nos traemos el resultado de la operación
    expect(result).toBe(8) // Esto resuelve nuestra prueba
  })

  test('Parametros vacios, devuelve undefined', () => {
    const result = suma()
    expect(result).toBeUndefined()
  })
})

describe('Funcion resta', () => {
  test('nombre de la prueba', () => {
    const result = resta(4, 2)
    expect(result).toBe(2)
  })

  test('Parametros vacios, devuelve undefined', () => {
    const result = resta()
    expect(result).toBeUndefined()
  })
})
