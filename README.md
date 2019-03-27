# Create a Sales Tracker App

The app will be powered by Django on the backend and React.js on the frontend. A Django REST API based on the documentation from here, [Django REST APPI](https://www.django-rest-framework.org/) was created. Also download [Postman](https://www.getpostman.com/), to test the API; for POST, GET, and other requests. 

 ## Creating the Virtual Environment

 Use the following CLI actions:
 * pip install pipenv
 * pipenv
 * code .
 * pipenv install django djangorestframework django-rest-knox

 What's happening?

 From the first command line function to the last we are installing the [pipenv](https://packaging.python.org/tutorials/managing-dependencies/) package via the Python package manager (pip). So, just like Node.js' `npm`, `pipenv` aims to manage library dependencies when developing python applications. I love `npm` and I hope `pipenv` works on this collabrative python project. The third CLI action just runs the VS Code application, since that's my favorite text editor. The last line installs all the django packages needed for the application.

 ## Pipfile

 This file is used mainly to define the project's dependencies and where to get them. You can say it's a replacement for the commonly used `requirements.txt` files.