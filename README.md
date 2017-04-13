# Eat-Da-Burger
A burger logger with MySQL, Node, Express, Handlebars and a homemade ORM.

## Synopsis
An app that lets users input the names of burgers they'd like to eat. When a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured. Each burger has a "Devour It!" button. When the user clicks it, the burger is moved to the right side of the page (it has been devoured). The app stores every burger in a database, whether devoured or not.

Used Node and mySQL to query and route data into app, and Handlebars to generate the HTML.

## NPM Packages 
- body-parser
- express
- express-handlebars
- method-override
- mysql
