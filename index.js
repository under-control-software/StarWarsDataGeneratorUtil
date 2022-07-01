//@ts-check

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";
const { faker } = require("@faker-js/faker");
const fs = require("fs");

// droid: 0 to 49999
// human: 50000 to 99999

var ids = [];
for (let i = 50000; i < 70000; i++) {
  ids.push(i);
}
const appearsIn = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var data = [];
for (let i = 50000; i < 70000; i++) {
  data.push({
    _id: i.toString(),
    name: "Human " + faker.name.lastName(),
    friends: [
      ids[Math.floor(Math.random() * ids.length)].toString(),
      ids[Math.floor(Math.random() * ids.length)].toString(),
    ],
    appearsIn: [
      appearsIn[Math.floor(Math.random() * appearsIn.length)],
      appearsIn[Math.floor(Math.random() * appearsIn.length)],
    ],
    homePlanet: faker.address.country(),
  });
}

console.log("writing to file...");
fs.writeFile("human.json", JSON.stringify(data), (err) => {
  if (err) {
    console.log(err);
  }
  console.log("done");
});
