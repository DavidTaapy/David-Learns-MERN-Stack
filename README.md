# David-Learns-MERN-Stack

## Description
The following application was built to learn how to build a MERN (MongoDB, Express, React, Node) Stack application by following a tutorial by Beau Carnes published on FreeCodeCamp.Org, which can be found at the following link: https://www.youtube.com/watch?v=mrHNSanmqQ4&ab_channel=freeCodeCamp.org! The following application is a restaurant search and review application, and some of it's features include:
- Searching for restaurants based on name, cuisine or zipcode
- Add / Update / Delete reviews for specific restaurants
- Look up all the available cuisines
- Check the location of a selected restaurant

![Picture of website](/snapshots/Sample.png)

## Directory Description
- **backend** contains the backend code for the MERN Application
- **frontend** contains the frontend code for the MERN Application
- **frontend with realm** contains the frontend code for the application hosted on MongoDB Realm
- **realm code** contains the functions for the application hosted on MongoDB Realm

## Developing the application
The application was developed using Insomnia for the API development to allow for quicker and easier testing of the REST requests directly!

## Styling
No custom CSS templates were used for this project, with all the styling done using bootstrap!

## Features
The project contains the following features:
- Cloud hosting of database using MongoDB Atlas
- Using MongoDB Realm to host both the frontend and the backend of the webapp
 
## Starting the application

### Backend
The backend server is written using Node and Express! Mongodb was also used as the database management system! To start the server for the backend, use the following command in the backend directory:
```
nodemon server
```

### Frontend
The frontend of the application is written using Node and React! To run in the local machine, run the following command in the frontend directory:
```
npm start
```
