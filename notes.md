## Create user for mongodb

   db.createUser(
   {
     user: "guestware1",
     pwd: "guestware1",
     roles: [ "readWrite", "your-db-name" ]
   })