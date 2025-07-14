# Etapa de construcción
FROM node:22-alpine AS builder
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa de producción
FROM node:22-alpine AS runner
WORKDIR /app
COPY --from=builder /app/out ./out
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "out", "-l", "3000"]
