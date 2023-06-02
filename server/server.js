//requirements
const express = require('express');
const fs = require('fs');
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 2319;

//because cors. just do it
app.use(cors());
//because json.
app.use(express.json());

//handles get request to "/"
app.get('/', function (req, res) {
    console.log("home route");
    res.send({ title: "hello" })
});

function readLocations() {
    //get info from file
    const locationsData = fs.readFileSync();
    //parse info
    const parsedData = JSON.parse(locationsData);
    return parsedData;
}

//handle get request to "/locations"
app.get('/locations', function (req, res) {
    console.log("location route");
    //get locations
    const locations = readLocations();
    //send status
    response.status(200);
    //send info
    response.json(locations);
})

//handle get request to "/locations:time"
app.get('/locations/:time', function (req, res) {
    console.log("location route");
    //get locations
    const locations = readLocations();
    //filter locations by time
    const filteredLocations = locations.filter(location => location.time <= params.time) 
    //send status
    response.status(200);
    //send info
    response.json(locations);
})



//handle post request to "/locations"
app.post("/locations", (req, res) => {
    //get info from request to create new location
    const newLocation = {
        //set infos
        id: crypto.randomUUID(),
        location: req.body.location,
        contact: req.body.contact,
        category: req.body.category,
        distance: req.body.distance,
    }

    //get current locations info
    const locations = readLocations();
    //add new location
    locations.push(newLocation);
    //save updated array to json file
    fs.writeFileSync("./data/locations.json");
    //respond with status and new location
    res.status(201).json(newLocation);
});

//which port to listen on 
app.listen(PORT, function () {
    console.log(`We have a ${PORT}!`);
});