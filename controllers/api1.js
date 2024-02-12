const jwt = require("jsonwebtoken");

const api1 = async(req,res)=>{ 
   const accessTokenUser= jwt.sign({
      user:{
          username:"harshvardhan"
      },
  },
  "harsh",
  {expiresIn: "5m"}
  );
//   const accessTokenAdmin= jwt.sign({
//    user:{
//        username:"harshvardhan"
//    },
// },
// "harsh",
// {expiresIn: "5m"}
// );
// console.log(accessToken);
// return res.status(200).send({message:"hi viewer,here is your authentication token",accessTokenUser});
  console.log(accessToken);
  return res.status(200).send({message:"hi viewer,here is your authentication token",accessTokenUser});
};

module.exports ={ api1 }; 