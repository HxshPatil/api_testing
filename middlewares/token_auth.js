const jwt = require("jsonwebtoken");

const validToken = async (req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    jwt.verify(token, "harsh", (err, decoded) => {
      if (err) {
        return res.status(401).send({ message: "validation failed" });
      } else {
        req.user = decoded.user;
        next();
      }
    });
  } else {
    return res
      .status(401)
      .send({ message: "missing token" });
  }
};

module.exports = validToken;
