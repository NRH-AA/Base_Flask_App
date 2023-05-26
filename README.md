# Flask React Project
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

Front end is set up to use themes. Create them in react-app/src/index.css
If you need help understanding how to use it look up how to use data-theme in css.

# To download required libraries:
In the project root folder use: `pipenv install`

In the react-app folder use: `npm i`

To start the back end: In the root folder use: `pipenv run flask run`

To start the front end: In react-app folder use: `npm start`
