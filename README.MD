# FULLSTACK MERN + TYPESCRIPT NOTE APPLICATION
### Intro
Welcome to our MERN (MongoDB, Express.js, React, Node.js) Note application built with TypeScript! This app allows users to create custom notes for their further usage. TypeScript provides static type-checking and other advanced features to improve the development experience and catch errors early. Users can create notes, update already created notes, or to delete them. The app utilizes MongoDB for data storage, Express.js for the server-side logic, React for the user interface, and Node.js for the runtime environment, and react-bootstrap for stylizing.

### EXPRESS-SESSION
I Faced one issue in building this application and it was that session couldn't pass the value in it from one route to another route. or in other word there were nothing of cookies to be set on browser. The solution was to add `credentials: "include"` to the `fetch request` and it solved the issue.
