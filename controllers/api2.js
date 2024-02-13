const api2 = async (req, res) => {
  res
    .status(200)
    .send({ message: `token authentication successful.Hi ${req.user.name}` });
};

module.exports = { api2 };
