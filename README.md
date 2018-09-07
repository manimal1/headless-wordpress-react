# This Application is for:

Developers seeking to provide clients (or themselves) with the tried and true Wordpress CMS platform while allowing them to also build and employ modern frontend solutions.  It uses Node + React + Redux + headless Wordpress, as well as Docker and Nginx (Nginx config coming soon!).

Have Fun!!!  
  
  
# Initial Setup  
  
  
## 1.0 Setup - Wordpress Docker Container

### 1.1 Run the docker container in the root folder
```
docker-compose up
```

--- These next steps are only necessary on initial setup ---
### 1.2 Go to http://localhost:8000 and set up your wordpress site

### 1.3 Activate the installed plugins

### 1.4 In Settings > Permalinks, choose 'Post name' and Save Changes

### 1.5 In Settings > JSON API, activate 'Core', 'Posts', and 'User'

### 1.6 In Pages, add two new pages: pages, and profile

### 1.7 In Posts, add New Posts so you have at least 4


## 2.0 Setup - Client side React App

### 2.1 Install the dependencies (Make sure to use node v.8.9.4 or higher) in root/client
```
npm install
```

### 2.2 Run the application
```
npm start
```

## 3.0 After initial setup is complete, you only need to run:

### 3.1 In root folder:
```
docker-compose up
```

Don't forget to run:
```
docker-compose down
```
when you close the application

### 3.2 In root/client:
```
npm start
```

## 4.0 Known Bugs:

## 4.1 Buttons folder files created in lower case
The Buttons folder in root/client/src/components, and it's two button files FacebookButton.js and ReadMore.js, are sometimes created in lowercase.  This is wrong and it will be fixed soon.  They all need to be in uppercase.
