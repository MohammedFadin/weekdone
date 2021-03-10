### VMware WeekDone Microservices Demo
Weekdone application is a simple 3 tier application composed of 2 microservices and a single mongodb database.

### Running the container

```bash
docker run -p 3000:3000 -d odrodrig/guestbook-nodejs:latest
```

The application can be accessed through http://localhost:3000/

The API Explorer can be accessed through http://localhost:3000/explorer

## Datasources

This application has a PersistedModel representation for the data model which is compatible with Mongo and other similar databases. By default the app stores data in memory which means that the data does not persist if the app crashes or goes down for any reason. You have the option to use Mongo to persist the data from the application by adding the following environment variables:

Required:

- MONGO_HOST - The hostname to access Mongo
- MONGO_PORT - The port to access Mongo

Optional:

- MONGO_USER - The username used to access Mongo. If you are using an unsecured Mongo instance, leave this blank.
- MONGO_PASS - The password to access Mongo. If you are using an unsecured Mongo instance, leave this blank.
- MONGO_DB - The name of the database within Mongo. This can be left blank and the default database name will be used.