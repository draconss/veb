const osmosis = require("osmosis");
const fs = require("fs");
const MongoClient = require("mongodb").MongoClient;

const data_bd = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(data_bd, { useNewUrlParser: true });

osmosis
  .get("https://mangachan.me/user/draconss/newest")
  .find(".area_rightNews")
  .set({ dates: ["li"] })
  .data(function(data_pars) {
      console.log(data_pars);
    fs.writeFile("index.html", JSON.stringify(data_pars["dates"]), function(err) {
      if (err) throw err;
      console.log("ok");
    });
    mongoClient.connect(function(err, conn) {
      const db = conn.db("test");
      const collection = db.collection("parsing");
      collection.insertOne(data_pars, function(err, res) {
        if (err) {
          console.log(err);
        }
        conn.close();
      });
    });
  });
