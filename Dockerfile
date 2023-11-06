# Usa una immagine di Node.js come base
FROM node:18

# Crea una directory di lavoro nell'immagine
WORKDIR /app

# Copia il file package.json e package-lock.json
COPY package*.json ./

# Installa le dipendenze
RUN npm install

# Installa pm2

RUN npm install pm2@latest -g

# Copia il codice sorgente nella directory di lavoro
COPY . .

# Compila il codice TypeScript in JavaScript
RUN npm run build

# Esponi la porta su cui il tuo servizio ascolterà
EXPOSE 3000

# Avvia l'applicazione
CMD ["node", "build/src/index.js"]