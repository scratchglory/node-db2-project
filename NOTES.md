1. npm install knex sqlite3 express
2. npx knex init
3. delete all module.exports and write in new ones to fit the app
   - client, useNullAsDefault, connection: {}
4. config.js file in './data'
   - instead of hardcoding in a config object
5. Knex migrations
   - knex migrate:make [migration-name]
6. Build schema in migrations
   - Needs, VIN, make, model, and mileage
7. knex migrate:latest
   - table not yet created
   - If schema needs updating, DON't EDIT migration file, create new one
     - knex migrate:make [new-migration-name]
   - If migrations NEEDS an edit
     - knex migrate:rollback
     - then, knex migrate:latest
8. Check database -- cars.db3 should of been populated by this point
9. Create Router - CRUD and index.js
