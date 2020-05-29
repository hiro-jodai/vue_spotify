FROM node:12.4-alpine

WORKDIR /var/www/html

# https://ja.nuxtjs.org/faq/host-port/
ENV HOST 0.0.0.0

# 起動スクリプトをコンテナに追加
COPY ./startup.sh /usr/local/bin/startup.sh
RUN chmod 777 /usr/local/bin/startup.sh

# Init command
CMD ["/usr/local/bin/startup.sh","-F"]