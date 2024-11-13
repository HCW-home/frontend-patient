FROM node:20 AS builder
ENV VERSION=0.5.3
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn
COPY . .
RUN npx ionic cap build browser --prod --no-open

FROM docker.io/nginxinc/nginx-unprivileged:latest
COPY --from=builder /usr/src/app/www/ /usr/share/nginx/html/
COPY nginx-docker.conf.template /etc/nginx/templates/default.conf.template
COPY nginx.conf /etc/nginx/nginx.conf
COPY .version /usr/share/nginx/html/
USER 0
RUN apt-get update && \
  apt install -y jq && \
  rm -rf /var/lib/apt/lists/*
USER 101
