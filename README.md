# City App
City App with MERN stack.

## Installation
### Server
- cd to /server folder and install required node modules:
- `$ npm install`
- Then configure your database information in dbConfig file under /server/config folder.
- Use nodemon to start the server. When server starts it will create a new table called "cities" in MySql.
- `$ nodemon`
### Client
- cd to /client folder and install required node modules:
- `$ npm install`
- Then start dev server using:
- `$ npm start`

### User stories
- There are three pages on in this app; Home, Create City, Delete All Cities.
- Home page will display all cities stored in database.
- Create City page will call two different API services and store newly created City object database.
- Delete All Cities page will empty whole database upon triggering the button.

### Testing with Postman
- These are the available routes for testing each function:
- "/api/cities" returns all cities.
- "/api/deleteallcities" empties database.
- "/api/weather" gets weather information for requested city.
- "/api/location" gets location information for requested city.
- "/api/createcity" combines two API services and saves newly created city into database.
