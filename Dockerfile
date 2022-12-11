FROM gplane/pnpm:latest as builder
WORKDIR /app
COPY . .
RUN pnpm install --frozen-lockfile
ENV NODE_OPTIONS="--max-old-space-size=512"
RUN pnpm export

# FROM alpine:3.16 as deps
# RUN apk add wget
# RUN wget https://github.com/weihanglo/sfz/releases/download/v0.7.1/sfz-v0.7.1-x86_64-unknown-linux-musl.tar.gz
# RUN tar -xzf sfz-v0.7.1-x86_64-unknown-linux-musl.tar.gz

# FROM alpine:3.16
# WORKDIR /srv
# COPY --from=builder /app/out ./
# COPY --from=deps /sfz /usr/bin/sfz
# CMD sfz --no-ignore --bind 0.0.0.0 --port 80 --render-index /srv

FROM node:16-alpine
WORKDIR /srv
COPY --from=builder /app/out ./
RUN npm install -g serve
CMD ["npx","serve","-l","tcp://0.0.0.0:3000"]