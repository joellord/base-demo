FROM node:12
COPY . /app
WORKDIR /app
ENV JQ_VERSION='1.5'

RUN wget --no-check-certificate https://raw.githubusercontent.com/stedolan/jq/master/sig/jq-release.key -O /tmp/jq-release.key && \
    wget --no-check-certificate https://raw.githubusercontent.com/stedolan/jq/master/sig/v${JQ_VERSION}/jq-linux64.asc -O /tmp/jq-linux64.asc && \
    wget --no-check-certificate https://github.com/stedolan/jq/releases/download/jq-${JQ_VERSION}/jq-linux64 -O /tmp/jq-linux64 && \
    gpg --import /tmp/jq-release.key && \
    gpg --verify /tmp/jq-linux64.asc /tmp/jq-linux64 && \
    cp /tmp/jq-linux64 /usr/bin/jq && \
    chmod +x /usr/bin/jq && \
    rm -f /tmp/jq-release.key && \
    rm -f /tmp/jq-linux64.asc && \
    rm -f /tmp/jq-linux64
WORKDIR /app/src
RUN contents="$(jq '.WORKING_API_URL = "$WORKING_API_URL"' config.json)" && echo ${contents} > config.json
RUN contents="$(jq '.CRASHING_API_URL = "$CRASHING_API_URL"' config.json)" && echo ${contents} > config.json
RUN npm install
RUN npm run build

FROM nginx:1.17
COPY ./nginx.conf /etc/nginx/nginx.conf
WORKDIR /code
COPY --from=0 /app/dist .
COPY start_nginx.sh /
RUN chmod +x /start_nginx.sh
EXPOSE 8080
USER 1000
ENTRYPOINT [ "/start_nginx.sh" ]
