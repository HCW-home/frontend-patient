FROM node:20 AS builder
ENV VERSION=0.5.23
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn
COPY . .
RUN npx ionic cap build browser --prod --no-open

FROM docker.io/nginxinc/nginx-unprivileged:1.28-bookworm
COPY --from=builder /usr/src/app/www/ /usr/share/nginx/html/
COPY nginx-docker.conf.template /etc/nginx/templates/default.conf.template
COPY nginx.conf /etc/nginx/nginx.conf
COPY .version /usr/share/nginx/html/
RUN mkdir /etc/nginx/ssl/ && openssl req -x509 -nodes -days 3650 -newkey rsa:2048 -keyout /etc/nginx/ssl/ssl-cert-snakeoil.key -out /etc/nginx/ssl/ssl-cert-snakeoil.pem -subj "/C=US/ST=California/L=San Francisco/O=My Company/OU=IT/CN=example.com"
USER 0
RUN apt-get update && \
  apt install -y jq && \
  rm -rf /var/lib/apt/lists/*
USER 101
