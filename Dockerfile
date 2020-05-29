FROM node:12.4-alpine

WORKDIR /var/www/html

# vueプロジェクトを作成するためのcli類を入れる
RUN npm install --global @vue/cli @vue/cli-init

# 起動スクリプトをコンテナに追加
COPY ./startup.sh /usr/local/bin/startup.sh
RUN chmod 777 /usr/local/bin/startup.sh

# Init command
CMD ["/usr/local/bin/startup.sh","-F"]