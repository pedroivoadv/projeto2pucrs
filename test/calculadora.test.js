const request = require('supertest')
const app = require('../src/server') // caminho para o app

describe('Testes da Calculadora API', () => {
  test('Soma: 5 + 3 = 8', async () => {
    const res = await request(app)
      .post('/calc')
      .send({ num1: 5, num2: 3, operacao: 'soma' })
    expect(res.statusCode).toBe(200)
    expect(res.body.resultado).toBe(8)
  })

  test('Subtração: 10 - 4 = 6', async () => {
    const res = await request(app)
      .post('/calc')
      .send({ num1: 10, num2: 4, operacao: 'subtracao' })
    expect(res.statusCode).toBe(200)
    expect(res.body.resultado).toBe(6)
  })

  test('Multiplicação: 6 * 7 = 42', async () => {
    const res = await request(app)
      .post('/calc')
      .send({ num1: 6, num2: 7, operacao: 'multiplicacao' })
    expect(res.statusCode).toBe(200)
    expect(res.body.resultado).toBe(42)
  })

  test('Divisão: 20 / 5 = 4', async () => {
    const res = await request(app)
      .post('/calc')
      .send({ num1: 20, num2: 5, operacao: 'divisao' })
    expect(res.statusCode).toBe(200)
    expect(res.body.resultado).toBe(4)
  })

  test('Divisão por zero retorna erro', async () => {
    const res = await request(app)
      .post('/calc')
      .send({ num1: 5, num2: 0, operacao: 'divisao' })
    expect(res.statusCode).toBe(400)
    expect(res.body.error).toBe('Divisão por zero não é permitida')
  })
})
