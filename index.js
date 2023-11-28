const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {
  createPlayer,
  getAllPlayer,
  deletePlayer,
  updatePlayer,
} = require("./operations");
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Connection to MongoDB created");
    //let player = await createPlayer("Malik", 95);
    //console.log(player);
    //let allPlayer = await getAllPlayer();
    //console.log(allPlayer);
    
    //let updatedPlayer = updatePlayer("65661b01c3cc0048720fe6af","Talha", 150);
    //console.log(await deletePlayer("5ebb0f03aa9b9b4db09e919e"));
    let delPlayer = await deletePlayer("65661b01c3cc0048720fe6af");
  })
  .catch((err) => {
    console.log("Error Connecting");
    console.log(err);
  });
app.listen(3000);