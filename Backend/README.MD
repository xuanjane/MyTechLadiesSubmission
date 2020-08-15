## Introduction to my first JSON REST API

#### #1 Struture of the local Database

The local database (DB) is made up of 3 tables:
1. `users`. Properties: id, email, passwordHash, firstName, lastName
2. `usersdetails` Properties: email, workplace, jobtitle, interestingfact, image, github, linkedin
3. `whys` (i want to be part of the Techladies Bootcamp) Properties: email, reason

The connecting UNIQUE identifier across all 3 tables is 'email'.

A FOREIGN KEY contraint has been added to 'email' to ensure that the tables `usersdetails` and `why` reference `users`.

Hence, `userdetails` and `why` can only be populated after the corresponding columns have been populated in `users`


#### #2 Setting up the Node.js project
1. In "Git bash" on Windows, navigate to the folder and run npm install.
2. Verify that the knexfile.js is initialized with the correct database name of your preference
3. Add your DB_USERNAME and DB_PASSWORD to .env file.
4. Run the following commands in the terminal to prepare the databases and seed them with some dummy data

  NODE_ENV=development npm run db:migrate

  NODE_ENV=development npm run db:seed

  Start the app with npm run dev

5. Visit http://localhost:3001/ to verify that the routes are working



#### #3 Introduction to the Routes available
1. http://localhost:3001/

Welcome and thanks for viewing my submission!

`users`

2. http://localhost:3001/users

The page is empty as I did not want any data exposed unless a correct query is input. If wrong query is input, the page will remain empty.

Examples of correct queries:

http://localhost:3001/users/?name=jane

http://localhost:3001/users/?name=tarzan


Examples of wrong queries:

http://localhost:3001/users/?Names=jane

http://localhost:3001/users/?email=jane


If the data queried does not exist, the page will display "Not found". Data is case-sensitive. Hence, all the seed names were input as small letters for consistency.

Examples of "Not found" :

http://localhost:3001/users/?name=Jane



2. http://localhost:3001/users/fulllist

The full list of users, without the id and password


3. http://localhost:3001/users/:id

4. POST new users via POSTMAN

`usersdetails`

The routes below takes in 2 queries: email and password Hash.

These queries are matched to the user table first to check if email and password have both been entered correctly.

If both have been entered correctly, the userdetails table is then queried for more details about that particular user.

Else the page will display {"input":"wrong username or password"}

1. http://localhost:3001/usersdetails/?email=xuanjane88@gmail.com&passwordHash=jane

2. http://localhost:3001/usersdetails/?email=tarzan@jungle.com&passwordHash=tarzan


3. Similary, we can POST new usersdetails via POSTMAN, but only if the corresponding user has been populated in the `users` table.


`whys`

Routes that display why i want to be part of the Techladies Bootcamp, based on email.

1. http://localhost:3001/whys/xuanjane88@gmail.com

2. http://localhost:3001/whys/tarzan@jungle.com


3. Similary, we can POST new whys via POSTMAN, but only if the corresponding user has been populated in the `users` table.