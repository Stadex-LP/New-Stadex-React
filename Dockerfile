# Utilisez une image officielle de Node.js comme base
FROM node:14

# Définissez le répertoire de travail
WORKDIR /app

# Copiez package.json et package-lock.json (si vous utilisez npm) ou yarn.lock (si vous utilisez Yarn)
COPY package.json ./
COPY yarn.lock ./
RUN yarn install

# Installez les dépendances
RUN yarn install --production

# Copiez le reste de l'application
COPY . .

# Exposez le port sur lequel l'application sera accessible
EXPOSE 3000

# Démarrez l'application
CMD ["yarn", "start"]
