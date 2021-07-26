# roster

## Description
This repository holds a web application to view a roster of students retrieved from https://api.hatchways.io/assessment/students. The application allows you to search entities by their names and also by tags that the user themselves can assign to the entities.

## Installation & Deployment
Download or clone the repository and navigate to the root folder on a terminal. Use the following command in the root directory to install the necessary npm pacakages.
    
    npm install

The following command would then deploy the application in a browser on localhost at port 3000.

    npm start

## Linting & Testing
The project uses eslint for linting purposes. The following command lints all *.js files.

    npm run lint

Tests are placed in the "/src/\_\_tests__/" folder. Use the following command to test all of them.

    npm test


## Tech involved
- [Create React App](https://reactjs.org/docs/create-a-new-react-app.html)
