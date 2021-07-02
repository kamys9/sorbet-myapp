// // lib and imports
// const express = require("express");
// const app = express();

// const myFirstCOntroller = require("./controllers/controller")

// // app setup
// app.use(express.json())
// app.use("/static", express.static("public"));
// app.set("view engine", "ejs");


// // pages
// app.get('/',(req, res) => {
//   res.render('home.ejs');
// });


// Create here your api setup


//testintergr
// import React, {useState} from 'react';
// import ReactMapGL, {Marker, Popup } from 'react-map-gl';
// import * as glaciers from "./glaciers.json";
// let REACT_APP_MAPBOX_TOKEN = "pk.eyJ1Ijoia2FtaWtvIiwiYSI6ImNrcWkwOHBndzAweDEybnBkaGlkcmJnZDQifQ.R3oBs5JyIkxfdjUpV3tMYg"




// app.listen(3000, () => console.log("Server Up and running"));


const express = require('express')
//29.06
const PORT = process.env.PORT || 3001;

const app = express()

app.use(express.json())
app.use(express.static('public'))

// 29.06   server/index.js


app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
// end 29.06 server/index.js

// app.listen(process.env.PORT || 8080, () =>
//   console.log('Server running at port http://localhost:8080')
// )






