FROM gplane/pnpm:latest as builder
WORKDIR /app
COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm export

FROM node:16-alpine
ARG GITHUB_TOKEN
ENV GITHUB_TOKEN=$GITHUB_TOKEN
WORKDIR /srv
COPY --from=builder /app/out ./
COPY --from=builder /app/fetch.mjs ./
RUN chmod +x ./fetch.mjs
RUN npm install -g serve zx
CMD ./fetch.mjs