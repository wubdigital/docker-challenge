require("dotenv").config();
const mongoose = require("mongoose");
const user = require("./model/User.js");
const users = [
  {
    "name": "Yoni Levi",
    "email": "yoni.levi@example.com",
    "age": 28
  },
  {
    "name": "Michal Avraham",
    "email": "michal.a@example.com",
    "age": 34
  },
  {
    "name": "David Cohen",
    "email": "david.cohen@example.com",
    "age": 22
  },
  {
    "name": "Noam Israeli",
    "email": "noam.israeli@example.com",
    "age": 41
  },
  {
    "name": "Adi Mizrahi",
    "email": "adi.miz@example.com",
    "age": 19
  },
  {
    "name": "Guy Shani",
    "email": "guy.shani@example.com",
    "age": 31
  },
  {
    "name": "Tali Peretz",
    "email": "tali.p@example.com",
    "age": 26
  },
  {
    "name": "Omer Friedman",
    "email": "omer.f@example.com",
    "age": 45
  },
  {
    "name": "Maya Bar",
    "email": "maya.bar@example.com",
    "age": 29
  },
  {
    "name": "Eitan Katz",
    "email": "eitan.k@example.com",
    "age": 37
  }
];

async function loadWorkers() {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster1.pgu8oqf.mongodb.net/${process.env.DB_NAME}`,
    );
    await user.deleteMany({});
    console.log("work deleted ok ");

    await user.insertMany(users);
    console.log("users load inti the db successfully");
  } catch (error) {
    console.error("something went wrong", error.message);
  } finally {
    await mongoose.disconnect();
    console.log("closed conection bye bye ");
  }
}
loadWorkers();
