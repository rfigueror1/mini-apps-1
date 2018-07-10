Read Me

1. The first step is to set up our database (./server/db/schema.sql)
  1.1 create DATABASE
  1.2 create tables
  1.3 insert test data
  1.4 make test using a query

2. The second step is to establish a connection with the database (./server/db/index.sql)
  2.1 install all dependencies using npm
  2.2 install npm install mysql
  2.3 connect with the DATABASE
  2.4 export the connection

3. Write the functions of the database for i) retrieving specific information, ii) all information, iii) adding to the DB (./server/db/information.sql)
  3.1 Import the connection previously written
  3.2 Write each functions ---IMPORTANT TO USE CALLBACKS FOR LATER USE!!!!!
    3.2.1 retrieveAll
    3.2.2 retrieveSpecific -- parameters required
    3.2.3 add
    3.2.4 export file to make them available to the server

4. Set up server making queries to the database and serving files
  4.1 Serve static files
  4.2 Define routes --- report is the route.
  4.3 Middleware for parsing the body
  4.4 POST - Send the data in the body, but collecting the pieces (parse the Body)
  4.5 Use the methods wrote in the database to service requests
  4.6 connect the server to specific port

5. Client
