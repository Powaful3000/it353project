# it353project

-   This Project was created by Andrew DeSanti, David Chase, and Greg Yonan
-   This project is a full stack website for a resturant called "Bernire's Italian Resteruant". The Information being pulled from the database is the list of menu items
-   The Website is configured using Node.js and a Postgres database. You need to create a table called "menu" in the database to add info. The database needs to know the item's name, id, and price. From there, get the server up and running and you can now perform CRUD operations on the database from the admin UI. Whatever info is added to the "menu" table in the database will now be printed on the 3rd page (menu) of the website. /node-api-postgres/menu.sql contains the sql query to create the aforementioned schema.
-   Ensure you are using the default postgres user/pass or that you change your database info in /node-api-postgres/queries.js
