FROM exiasr/alpine-yarn-nginx:10.14.2

# Create directories all the way up to app
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Bundle app source
COPY . /usr/src/app

# Copy over to nginx
RUN mv /usr/src/app/public/* /usr/share/nginx/html
