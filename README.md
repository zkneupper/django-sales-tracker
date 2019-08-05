# Create a Sales Tracker App

Django will power the app on the backend and React.js on the frontend. A Django REST API based on the documentation from here, [Django REST API](https://www.django-rest-framework.org/) was created. Also download [Postman](https://www.getpostman.com/), to test the API; for POST, GET, and other requests. This application built with heavy reference to the following [Django REST with React](https://www.valentinog.com/blog/tutorial-api-django-rest-react/#Django_REST_with_React_Django_and_React_together) tutorial.

## Untrack Files in Git with .gitignore

1.  Commit all changes
2.  Remove everything from the repository - `git rm -r --cached .`
3.  Re-add everything - `git add .`
4.  Commit - `git commit -m ".gitignore fix"`

## Creating the Virtual Environment

Use the following CLI actions:

- pip install pipenv
- pipenv
- code .
- pipenv install django djangorestframework django-rest-knox

What's happening?

From the first command line function to the last we are installing the [pipenv](https://packaging.python.org/tutorials/managing-dependencies/) package via the Python package manager (pip). So, just like Node.js' `npm`, `pipenv` aims to manage library dependencies when developing python applications. I love `npm` and I hope `pipenv` works on this collabrative python project. The third CLI action just runs the VS Code application, since that's my favorite text editor. The last line installs all the django packages needed for the application.

## Pipfile

This file is used mainly to define the project's dependencies and where to get them. You can say it's a replacement for the commonly used `requirements.txt` files.

## Run Development Web Server Locally

There are multiple ways to run a lightweight development Web server on yuor local machine. For this project I used the command line `python manage.py runserver` within the project folder/directory. The default IP address **127.0.0.1** runs on port 8000. However, to make the development server viewable to other machines on the network, simple use **0.0.0.0** as the IP address. The command line would look like this, `python manage.py runserver 0.0.0.0:8000`.

Also, to run webpack from the command line just type `npm run dev`. If you set your scripts to run the develoment server to `webpack --mode development --watch`, then webpack will just watch the files while the server is running.

## Built With...

- React - Frontend JavaScript library.
- Redux - For state management within the app.
  - Redux-Thunk - A middleware that teaches `Redux` how to deal with functions as actions.
- Webpack - JavaScript module bundler.
- Axios - Manage HTTP requests.
- Django - Python Web framework used mainly for server-side development (including REST api) as well as, URL routing, a template engine, and for database schema migrations [click here for more on Django](https://www.djangoproject.com/).
  - SQLite - Embedded SQL Database engine.
