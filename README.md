# Building and Running
1. This app requires that MongoDB be installed on localhost with the default configuration
2. After cloning, cd to the root of the app and run the following Gradle commands
3. >gradle build
4. That should build the Spring Boot app and also run the "buildReact" task to build the React app.
5. >gradle bootRun
6. That should launch the Spring Boot/React app
7. Point your browser to http://locahost:8080 to try the To-Do list.

# Referenced Tutorials and Resources
* https://spring.io/guides/gs/accessing-data-mongodb/#initial
* https://spring.io/guides/gs/accessing-mongodb-data-rest/
* https://www.djamware.com/post/5ab6397c80aca714d19d5b9c/building-spring-boot-mongodb-and-reactjs-crud-web-application
* https://stackoverflow.com/questions/41889789/how-to-refresh-list-after-successfully-created-post-in-react-redux-form
* https://github.com/facebook/create-react-app/issues/301
* https://stackoverflow.com/questions/48847885/module-not-found-cant-resolve-bootstrap-dist-css-bootstrap-theme-css-in-c
* https://stackoverflow.com/questions/24839760/spring-boot-responsebody-doesnt-serialize-entity-id
