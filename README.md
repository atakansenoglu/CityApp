# CityApp
City App with MERN stack.

## Server
- cd to /server folder and install required node modules:
- `$ npm install`
- Then configure your database information in dbConfig file under /server/config folder.
- Use nodemon to start the server. When server starts it will create a new table called "cities" in MySql.
- `$ nodemon`

### Testing with Postman
- These are the available routes for testing each function:
- "/:cityName" returns requested cities.
- "/allCities" returns all cities.
- "/deleteAll" deletes all cities.
- "/weather/:cityName" gets weather information for requested city.
- "/location/:cityName" gets location information for requested city.
- "/city/:cityName" combines two API responses and saves newly created city into database.

## Client
...
