// подключение express
const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");

const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useNewUrlParser: true });
const urlencodedParser = bodyParser.urlencoded({extended: false});

mongoClient.connect(function(err, client) {
    const db = client.db("test");
    global.collection = db.collection("parsing");

});



const app = express();
app.use('/js', express.static('publick/js'));
app.get("/", function(request, response){
    response.sendFile(__dirname + "/publick/1.html");
});

app.get("/get-data", function(request, response){
    // отправляем ответ
    global.collection.find().toArray(function(err, results){
        console.log(results[0]['dates']);
        response.send(results[0]['dates']);
        //client.close();
    });

});
app.post("/add-data", urlencodedParser ,function(request, response){
    console.log(request.body['rezult']);
    global.collection.update({'code':"1"}, {'$push': {'dates': request.body['rezult']}});
    response.send("ok")
});
app.listen(8000);

