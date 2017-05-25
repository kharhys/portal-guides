FROM node:7-alpine

RUN apk add --update alpine-sdk python-dev

# Fix bug https://github.com/npm/npm/issues/9863
RUN cd $(npm root -g)/npm \
  && npm install fs-extra \
  && sed -i -e s/graceful-fs/fs-extra/ -e s/fs\.rename/fs.move/ ./lib/utils/rename.js
  
RUN npm install npm@4 -g
RUN npm install node-gyp -g
# RUN node-gyp install

# Create & set app directory
RUN mkdir -p /usr/src/app

# Bundle app source
COPY . /usr/src/app 
# COPY package.json /usr/src/app/

WORKDIR /usr/src/app

# Install deps
RUN npm install

# Build nuxt 
RUN npm run build 

# ENTRYPOINT ["node"]
EXPOSE 3000

# Start app
CMD [ "npm", "start" ]