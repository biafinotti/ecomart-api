# 🌿 EcoMart API - Cadastro de Produtos Sustentáveis

O **EcoMart** é uma iniciativa fictícia de supermercado inteligente que visa incentivar a economia circular. Esta API permite o cadastro de produtos, validando critérios de sustentabilidade e atribuindo "Eco-Pontos" que podem ser convertidos em descontos futuros para clientes que retornarem as embalagens para reciclagem.

## 🚀 Tecnologias Utilizadas

* **Node.js** & **Express** (Framework Web)
* **Jest** & **Supertest** (Testes Automatizados)
* **JavaScript** (ES6+)

## 🛠️ Regras de Negócio e Validações

Para garantir a integridade dos dados e o foco socioambiental, o cadastro de produtos segue as seguintes regras:

1.  **Valor Mínimo:** O preço do produto deve ser de, no mínimo, **R$ 0,01**.
2.  **Código de Barras (EAN-13):** Deve possuir exatamente 13 dígitos numéricos e ser único no sistema.
3.  **Lista Branca de Materiais:** Só são aceitos materiais recicláveis: `Plástico`, `Vidro`, `Alumínio`, `Papel` ou `TetraPak`.
4.  **Limite de Recompensa:** Os `ecoPoints` não podem exceder **20% do valor do produto**, garantindo a viabilidade financeira do programa de descontos.
5.  **Persistência:** Os dados são salvos **em memória**, sendo resetados sempre que o servidor for reiniciado.

## 📥 Instalação e Uso

### Pré-requisitos
* Node.js instalado (versão 14 ou superior)
* NPM ou Yarn

### Passo a Passo
1. Clone o repositório:
   ```bash
   git clone [https://github.com/SEU_USUARIO/ecomart-api.git](https://github.com/biafinotti/ecomart-api.git)

   

   Instale as dependências:

Bash
npm install
Inicie o servidor:

Bash
npm start
A API estará disponível em http://localhost:3000

🧪 Executando os Testes
Este projeto utiliza testes automatizados para garantir que todas as regras de negócio sejam respeitadas. Para rodar a suíte de testes, execute:

Bash
npm test
🗺️ Endpoints
Cadastro de Produto
URL: /api/v1/products

Método: POST

Payload Exemplo:

JSON
{
  "name": "Garrafa de Vidro 500ml",
  "barcode": "7891234567890",
  "price": 8.50,
  "material": "Vidro",
  "ecoPoints": 1.50
}
Projeto desenvolvido como desafio técnico de API com foco em sustentabilidade e IA Generativa.


---

### Dica de Ouro para o GitHub:
Ao subir o código, não esqueça de configurar o arquivo `package.json` para que os comandos acima funcionem. Adicione a seção de scripts assim:

```json
"scripts": {
  "start": "node server.js",
  "test": "jest"
}
