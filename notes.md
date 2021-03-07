## Create user for mongodb

   db.createUser(
   {
     user: "weekdone",
     pwd: "weekdone",
     roles: [ "readWrite", "dbAdmin" ]
   })


   docker run -tid -p 8001:27017 --name guestware-mongo --hostname guestware-mongo --network local-network -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=root --add-host host.docker.internal:host-gateway mongo:latest

   mongo -u guestware1 -p guestware1 --authenticationDatabase guestware

   helm install --namespace devops gitlab-runner-weekend -f  gitlab/gitlab-runner