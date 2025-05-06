### Criar uma migration

npx sequelize-cli migration:generate --name add-role-to-member

### Desfazer migration

npx sequelize-cli db:migrate:undo

### Rodar migration

npx sequelize-cli db:migrate
