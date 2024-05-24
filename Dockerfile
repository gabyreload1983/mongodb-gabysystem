FROM mongo:latest

COPY ./mongo-init-scripts/ /docker-entrypoint-initdb.d
