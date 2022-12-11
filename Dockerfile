FROM gplane/pnpm:latest as builder
WORKDIR /app
COPY . .
RUN pnpm install --frozen-lockfile
ENV NODE_OPTIONS="--max-old-space-size=512"
RUN pnpm export

FROM node:lts-alpine
WORKDIR /app
COPY --from=builder /app/out ./
RUN npm install serve --global
CMD serve
