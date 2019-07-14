# React Redux Boilerplate
A modest boilerplate for those who would like to implement Redux for application level state management.

---

## Developer Requirements
+ Node 8.12.0 or higher  
+ NPM 6.4.1 or higher 
+ Yarn 1.13.0 or higher (optional)
+ Operating System: Mac OSX 10.10 or higher/Windows 7 or higher  

---

## Installation
Clone the repo and run either of the following
+ npm install
+ yarn install

---

## Development
##### Scripts
+ **npm run build:** Runs the **clean-build** script and then creates a new build folder

+ **npm run clean-build:** Deletes the build folder

+ **npm run server:** Navigates to the build directory and starts a python server on localhost port 8000

+ **npm start** Starts webpack dev server on localhost port 8080
    + A browser window should launch with the url **localhost:8080/**.

##### Workflow
###### development mode
- Run the command **npm start**. if you'd like to develop against the Application Server in addition to the webpack dev server, **npm start**
- A browser window should open at http:localhost:8080
- The react application should run
- As you you work on the application, styling changes are instantly propagated to the browser (JavaScript/React updates will most likely update in the console and require a manual browser refresh - this is intentional as it disincentivizes monkey patching development behavior)

###### production mode
- Run the command **npm run build** (VERY IMPORTANT! You will not be able to test a production scenario if you do not run a build first.)
- Run the command **npm run server**
- Open browser window at **localhost:8000/** to preview the application in production mode
---
