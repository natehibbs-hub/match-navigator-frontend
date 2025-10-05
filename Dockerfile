FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
RUN npm install || true
COPY . .
RUN npm run build || true
FROM node:20-alpine
WORKDIR /app
COPY --from=build /app/dist ./dist
RUN npm i -g vite
EXPOSE 5173
CMD ["vite","preview","--host","0.0.0.0","--port","5173","--strictPort"]
