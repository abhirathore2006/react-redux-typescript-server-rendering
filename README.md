# react-redux-typescript-server-rendering
This project is still in development and will be using for blog demos

I am using Yarn as Package manager but you can use npm and commands will be slightly different but installation of all dependencies can be done simply by command
-- npm install
while install with yarn can be done by
-- yarn install

#Setup
 yarn add  babel-core babel-loader  babel-preset-es2015 babel-preset-react ts-loader typescript typings webpack webpack-dev-server  --dev
 yarn add  react react-dom  lodash --save

 #installing Typings
 usually all typings are pushed with code, however if you ever face issue you can run below command to reinstall all typings

 node_modules/typings/dist/bin.js install   
     or
 typings install


 if you want to install other typings it can be done like below examples

 node_modules/typings/dist/bin.js install dt~react --global --save
        or ( if you installed typings as gloabl package)
 typings  install dt~react --global --save

#Running the project
yarn start
  or
npm start
