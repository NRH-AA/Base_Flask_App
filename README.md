# Flask React Project
Project uses React 18 and Redux Toolkit

Project includes CORS, CSRF, and Hashed Passwords.

User model is already created.

User model includes profile_picture with a default value.

User model includes user.theme so each user can store their theme preference.

Auth and User routes are set up.

AWS S3 routes in the backend are complete.

env.example includes env's for S3 bucket.

You can see the route in app/api/user_routes.py: Route: POST /api/users/upload

Database installed and ready for new models.

Front end react set up with a few routes for users.

*New* Redux Toolkit store set up.


Front end supports themes. Create them in react-app/src/index.css
If you need help understanding how to use it look up how to use data-theme in css.

Project is set up to use SASS.

# To download required libraries:
In the project root folder use: `pipenv install`

Create database with: `pipenv run flask db init && pipenv run flask db migrate && pipenv run flask db upgrade && pipenv run flask seed all`

In the react-app folder use: `npm i`

To start the back end: In the root folder use: `pipenv run flask run`

To start the front end: In react-app folder use: `npm start`

To compile scss files: In react-app folder use: `npm run gulp`

# Contribute
This project was created to be a base for anyone to create a flask application.

If you would like to contribute please create a fork of the dev branch and create a pull request.

You may also create an issue with code fixes if you do not want to create a pull request.

# Dependencies
`

    "@reduxjs/toolkit": "^1.9.5",
    
    "@testing-library/jest-dom": "^5.14.1",
    
    "@testing-library/react": "^11.2.7",
    
    "@testing-library/user-event": "^12.8.3",
    
    "http-proxy-middleware": "^1.0.5",
    
    "react": "^18.1.0",
    
    "react-dom": "^18.1.0",
    
    "react-bottom-scroll-listener": "^5.1.0",
    
    "react-redux": "^7.2.4",
    
    "react-router-dom": "^5.2.0",
    
    "react-scripts": "^4.0.3",
    
    "redux": "^4.1.0",
    
    "redux-logger": "^3.0.6",
    
    "redux-thunk": "^2.3.0",
    
    "use-local-storage": "^2.3.6"
`
