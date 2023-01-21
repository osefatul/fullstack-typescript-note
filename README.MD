# FULLSTACK MERN + TYPESCRIPT NOTE APPLICATION

### EXPRESS-SESSION
I Faced one issue in building this application and it was that session couldn't pass the value in it from one route to another route. or in other word there were nothing of cookies to be set on browser. The solution was to add `credentials: "include"` to the `fetch request` and it solved the issue.