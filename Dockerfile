FROM ubuntu:18.04
ENV NODE_VERSION=8.10.0
RUN apt-get update && \
   apt-get install wget curl ca-certificates rsync -y
RUN wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
ENV NVM_DIR=/root/.nvm
RUN . "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" &&  nvm use v${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm alias default v${NODE_VERSION}
RUN cp /root/.nvm/versions/node/v${NODE_VERSION}/bin/node /usr/bin/
RUN cp /root/.nvm/versions/node/v${NODE_VERSION}/bin/npm /usr/bin/
RUN /root/.nvm/versions/node/v${NODE_VERSION}/bin/npm install  leasot@latest -g
#WORKDIR "template"


FROM httpd:2.4
COPY . /usr/local/apache2/htdocs
#CMD ["dashboard.html"]

# Use the official Nginx image based on Alpine Linux
FROM nginx:alpine

# Copy the static files to the Nginx web directory
COPY . /usr/share/nginx/html
