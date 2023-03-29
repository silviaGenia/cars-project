### Configurando nestjs

```shell
npm i -g @nestjs/cli

nest new nest-first-project

#Which package manager would you ❤️   use?
*npm
yarn
pnpm

cd nest-first-project
npm install --silent
npm run start:dev

nest generate module cars
nest generate controller cars --no-spec
nest generate service cars --no-spec

npm i uuid
npm i @types/uuid -D

npm i --save class-validator class-transformer # Update main.ts

npm i typeorm dotenv
npm i @nestjs/typeorm -D

nest g module users --no-spec
nest g controller users --no-spec
nest g service users --no-spec
```
