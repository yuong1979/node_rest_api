FROM node:latest

#copy all the files in the current directory into the current image
COPY . .

#install all the packages inside package.json
RUN npm install

#CMD ["node", "src/index.js"]
#CMD node src/index.js
CMD npm start