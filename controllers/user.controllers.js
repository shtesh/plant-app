const User = require('../models/user');

const deleteFormOptions = (userId) => ({
    action: `/users/${userId}`,
    btnText: "Delete user",
    method: "POST",
    restMethod: "DELETE",
});

function userWithDeleteOptions(user) {
    const deleteOptions = deleteFormOptions(user._id);
    return {
    ...user,
    ...deleteOptions,
    };
}

const getUsers = async (req, res) => {
    try {
    const users = await User.find().lean();
    const usersWithOptions = users.map(userWithDeleteOptions);
    res.render("users", { users: usersWithOptions });
    } catch (err) {
    console.error(err);
    }
};

const editFormOptions = (userId) => ({
    action: `/users/${userId}`,
    btnText: "Edit user",
    method: "POST",
    restMethod: "PATCH",
});

const getUser = async (req, res) => {
    try {
    const { userId } = req.params;
      // Call the Celebrity model's findById method to retrieve the details of a specific celebrity by its id.
    const user = await User.findById(userId).lean();
      //rendering celebrity-detail view
    res.render("userDetail", {
        ...editFormOptions(userId),
        ...user,
    });
    } catch (err) {
    console.error(err);
    }
};

const createUser = async (req, res) => {
    try {
      // Create an object with keys for name, occupation, and catchPhrase.
      // Values for those keys should come from the form (req.body is the object full of the values from the form)
    const { username, email, password } = req.body;
      // Create an instance of the Celebrity model with the object you made in the previous step
    const user = await User.create({username, email, password});
    console.log("user", user);
    res.redirect("/users");
    } catch (err) {
    console.error(err);
    }
};

const updateUser = async (req, res) => {
    try {
    const { userId } = req.params;
    const { username, email, password} = req.body;
    const updatedUser = await User.findByIdAndUpdate(userId, {
        username,
        email,
        password
    });
    res.redirect(`/users/${userId}`);
    } catch (err) {
    console.log(err);
    }
};

const deleteUser = async (req, res) => {
    try {
    const { userId } = req.params;
      // Use the Celebrity model's findByIdAndRemove method to delete the celebrity by its id.
      const deletedUser = await User.findByIdAndDelete(userId);
      console.log("Deleted user", deletedUser);
      res.redirect("/users");
    } catch (err) {
      console.log(err);
    }
};

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
};





