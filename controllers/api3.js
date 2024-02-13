const roles = require("../roles");

const api3 = async (req, res) => {
  console.log(`admin:${roles.admin} , user:${roles.user}`);
  if (req.user.key === "0") {
    res.status(200).send({ message: "Hi admin!" });
  } else if (req.user.key === "1") {
    res.status(200).send({ message: "Hi user!" });
  } else {
    res.status(401).send({ message: "You are not authorized" });
  }
};

module.exports = { api3 };
