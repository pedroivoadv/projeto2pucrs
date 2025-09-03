const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.post('/calc', (req, res) => {
  const { num1, num2, operacao } = req.body
  if (num1 === undefined || num2 === undefined || !operacao) {
    return res.status(400).json({ error: 'num1, num2 e operacao são obrigatórios' })
  }
  let resultado
  switch (operacao) {
    case 'soma': resultado = num1 + num2; break
    case 'subtracao': resultado = num1 - num2; break
    case 'multiplicacao': resultado = num1 * num2; break
    case 'divisao':
      if (num2 === 0) return res.status(400).json({ error: 'Divisão por zero não é permitida' })
      resultado = num1 / num2
      break
    default: return res.status(400).json({ error: 'Operação inválida' })
  }
  res.json({ resultado })
})

// Apenas exporta o app para Jest; o listen só roda se o arquivo for executado diretamente
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Calculadora rodando em http://localhost:${port}`)
  })
}

module.exports = app
