# basic-chatbot_reacjs-django-postgres

## Frontend: Reactjs

Chatbot base template: [React-simple-chatbot](https://github.com/LucasBassetti/react-simple-chatbot)
Dockerfile contain commands to install packages for using in frontend.

## Backend: Django

requirement.txt file contains library used in backend folder.

```
    Django>=3.0,<4.0
    psycopg2-binary>=2.8
    djangorestframework==3.7.7
    psycopg2==2.8.5
    django-cors-headers
    tensorflow
    bogo
    regex
    pandas
```

## Database: Postgresql

## NLP Model: RNN-LSTM

## Deploy basic chatbot.

- Run:

```
    docker-compose up --build
```

- Then, open new terminal and type:

```
   docker exec -it django_backend /bin/bash
```

- Then, create superuser:

```
    python manage.py migrate
    python manage.py migrate --run-syncdb
    python manage.py createsuperuser
```
