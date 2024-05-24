db = db.getSiblingDB("mongo-gabysystem");

db.createUser({
  user: process.env.MONGO_INITDB_ROOT_USERNAME,
  pwd: process.env.MONGO_INITDB_ROOT_PASSWORD,
  roles: [{ role: "readWrite", db: "mongo-gabysystem" }],
});

db.createCollection("users");

db.users.insertOne({ initialized: true });
