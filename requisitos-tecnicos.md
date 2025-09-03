# 📋 Requisitos Técnicos - Projeto FoodTime DevOps

Este documento descreve os requisitos técnicos para a implementação do pipeline DevOps da aplicação fictícia *FoodTime*.

---

## 🔧 Integração Contínua (CI)

- Linguagem principal: Node.js
- Ferramenta de CI: GitHub Actions
- Testes automatizados com `npm test`
- Linting com ESLint

---

## 🚀 Entrega Contínua (CD)

- Deploy automático para bucket S3 na AWS
- Gatilhos baseados em push para branch `main`

---

## 🏗️ Infraestrutura como Código (IaC)

- Provisionamento com Terraform
- Recursos:
  - Bucket S3
  - IAM roles
  - CloudWatch para logs e métricas

---

## 📊 Monitoramento

- AWS CloudWatch para:
  - Logs de aplicação
  - Métricas de uso
  - Alarmes de erro

---

## 🔐 Segurança

- Análise de código com SonarQube
- Testes de vulnerabilidade com OWASP ZAP
- Dependabot para atualizações de dependências

---

## 📁 Organização do Projeto

\`\`\`
foodtime-devops/
├── infra/                  # Infraestrutura com Terraform
├── src/                   # Código-fonte da aplicação
├── .github/workflows/     # Pipelines CI/CD
├── docs/                  # Documentação
└── requisitos-tecnicos.md # Este documento
\`\`\`

---

### ✅ Observações

- Todos os recursos devem ser versionados no Git
- O pipeline deve ser executado automaticamente a cada push
- O projeto deve seguir boas práticas de segurança e observabilidade
