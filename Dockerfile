FROM gplane/pnpm:latest as builder
WORKDIR /app
COPY . .
RUN pnpm install --frozen-lockfile
ENV NODE_OPTIONS="--max-old-space-size=512"
RUN pnpm export

FROM node:16-alpine
WORKDIR /srv
ARG GITHUB_TOKEN
ENV GITHUB_TOKEN=$GITHUB_TOKEN
COPY --from=builder /app/out ./
COPY --from=builder /app/fetch.mjs ./
COPY app.json ./
RUN chmod +x ./fetch.mjs
RUN npm install -g serve zx
CMD ["npx","serve","-l","tcp://0.0.0.0:3000"]