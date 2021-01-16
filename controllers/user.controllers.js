const Plant = require('../models/plant');
const User = require('../models/user');

const getUser = async (req,res) => {
  try{
    console.log(req.session.currentUser);     
    const user = await User.findById(req.session.currentUser).populate("createdPlants").lean();
    console.log("User check", user);
    res.render("user/profile", {user});
  } catch (err) {
    res.send(err);
  }
};



module.exports = {
  getUser
};





