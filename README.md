## Estrutura basica do projeto

- .git: esta pasta indica que o projeto esta versionado no git
- .vscode: pasta com configuracoes do editor VSCODE
- backend: projetos de api que podem ser varios
- frontend: projeto de react ts
- migrations: projeto de NODE usando Knexjs
  - Todo projeto de NodeJs precisa de um arquivo package.json
  - o package.json e criado usado o comando npm init

### Receita do GIT

- git status
- git add --all // git add -- <caminho para arquivo>
  - exemplo: git add --all
  - exemplo: git add -- frontend/package.json
- git commit -m "Mensagem de texto"
- git pull origin main
- git push origin main
