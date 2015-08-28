FROM google/nodejs
WORKDIR /app
ADD . /app

CMD []
ENTRYPOINT ["/nodejs/bin/npm", "start"]
