const jwt = require("jsonwebtoken");

const api1 = async (req, res) => {
  const { username, id } = req.body;
  const accessToken = jwt.sign(
    {
      user: {
        name: username,
        key: id,
      },
    },
    "harsh",
    { expiresIn: "5m" }
  );
  return res
    .status(200)
    .send({
      message: "hi viewer,here is your authentication token",
      accessToken,
    });
};

module.exports = { api1 };
