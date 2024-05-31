FROM node:18.18 AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i
COPY . .
RUN npx ionic cap build browser --prod --no-open

FROM nginxinc/nginx-unprivileged:latest
COPY --from=builder /usr/src/app/www/ /usr/share/nginx/html/
COPY nginx-docker.conf.template /etc/nginx/templates/default.conf.template
COPY nginx.conf /etc/nginx/nginx.conf
USER 0
RUN apt-get update && \
  apt install -y jq && \
  rm -rf /var/lib/apt/lists/*
USER 101