1. npm install -g express-generator
2. run "express exp2014" to quickly start up a new project
3. cd exp2017 && npm install
4. cd .. and rm -R exp2017 can remove the whold project
5. express exp2017 --hogan -c less //a template using mustache and -c less for css with less
6. DEBUG=exp2017:* npm start //to run the application
7. npm install -g nodemon //reload the app without restart the order
8. run nodemon npm start to start the realtime app

bin/www just start a server, and the main logic is in app.js
