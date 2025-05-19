FROM node:20

WORKDIR /app

# Copiar o package.json e instalar as dependências
COPY package*.json ./

RUN npm install

# Ajustar permissões para os arquivos
RUN chown -R node:node /app

# Copiar o restante dos arquivos
COPY . .

USER node

EXPOSE 3000

CMD ["npm", "run", "dev"]