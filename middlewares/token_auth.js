const jwt= require("jsonwebtoken");

const validToken = async (req,res,next)=>{
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if(authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(" ")[1];
        jwt.verify(token,"harsh",(err,decoded)=>{
            if(err){
                res.status(401).send({message:"validation failed"});
            }
            else{
                req.user=decoded.user;
                console.log(req.user);
                res.status(200).send({message:`token authentication successful. Hi ${req.user.username}`})
            }
            next();
        });
    }
};

module.exports=validToken;