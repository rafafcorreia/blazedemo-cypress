1. Criar a pasta do projeto

2. `npm init -y`

3. `npm i cypress --save-dev`

4. `npx cypress verify`

5. `npx cypress open`

6. Definir a baseUrl, viewportHeight e viewportWidth no arquivo cypress.config.js

7. Configurar o intellisense de comandos do Cypress, criando o arquivo tsconfig.json na raiz:

```
{
    "compilerOptions": {
        "lib": [
            "ES2015",
            "DOM"
        ],
        "allowJs": true,
        "noEmit": true,
        "types": [
            "cypress"
        ]
    },
    "include": [
        "cypress/**/*.js",
        "cypress-file-upload"
    ]
}
``` 
8. Instalar o plugin ES6 Mocha Snippets
 
9. Instalar o plugin ESLint

10. Instalar o pacote do ESLint:
`npm i eslint --save-dev`

11. Instalar o pacote ESLint-Plugin-Cypress para incluir as regras do Cypress:
`npm i eslint-plugin-cypress --save-dev`

12. Criar arquivo .eslintrc.json na raiz contendo as regras:

```
{
    "env": {
        "browser": true,
        "node": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:cypress/recommended"
    ],
    "rules": {
        "camelcase": "error",
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 2,
                "maxEOF": 0
            }
        ],
        "operator-assignment": [
            "error",
            "always"
        ],
        "space-infix-ops": "error",
        "space-before-blocks": "error",
        "space-in-parens": "error",
        "keyword-spacing": "error",
        "lines-around-comment": [
            "error",
            {
                "beforeBlockComment": true,
                "beforeLineComment": true,
                "allowBlockStart": true
            }
        ],
        "spaced-comment": "error",
        "newline-per-chained-call": [
            "error",
            {
                "ignoreChainWithDepth": 3
            }
        ],
        "quotes": [
            "error",
            "single"
        ],
        "newline-after-var": "error",
        "arrow-spacing": "error"
    }
}
``` 

13. No caso do Blazedemo, como é um site terceiro, será necessário adicionar o seguinte bloco de código no arquivo e2e.js para ignorar alguns erros inesperados da aplicação:

```
Cypress.on('uncaught:exception', () => {
                return false
})
```
