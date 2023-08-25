FROM node:16 AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i
COPY . .
RUN npx ionic cap build browser --prod --no-open

FROM nginx:latest
COPY --from=builder /usr/src/app/www/ /usr/share/nginx/html/
COPY nginx-docker.conf.template /etc/nginx/templates/default.conf.template

RUN chown -R nginx:nginx /etc/nginx/conf.d && \
    chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /var/log/nginx

RUN touch /var/run/nginx.pid && \
    chown -R nginx:nginx /var/run/nginx.pid

RUN sed -i 's/^user.*/#user  nginx/g;' /etc/nginx/nginx.conf && \
    cat /etc/nginx/nginx.conf

USER nginx