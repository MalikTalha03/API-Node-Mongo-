const PlayerModel = require("./models/model");
const createPlayer = async (Name, score) => {
  console.log("Create Product");
  let players = new PlayerModel();
  players.Name = Name;
  players.score = score;
  await players.save();
  return players;
};
const updatePlayer = async (_id, Name,score) => {
  let players = await PlayerModel.findById(_id);
  players.Name = Name;
  players.score = score;
  await players.save();
  return players;
};
const getAllPlayer = async () => {
  let players = await PlayerModel.find();
  return players;
};
const deletePlayer = async (_id) => {
  let players = await PlayerModel.findByIdAndDelete(_id);
  return players;
};
module.exports.createPlayer = createPlayer;
module.exports.getAllPlayer = getAllPlayer;
module.exports.deletePlayer = deletePlayer;
module.exports.updatePlayer = updatePlayer;