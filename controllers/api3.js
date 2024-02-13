const api3 = async(req,res)=>{ 

    if (req.user.key==="0"){
        console.log("Hi admin!");
        res.status(200).send({message:"Hi admin!"});
    }
    else if(req.user.key=== "1"){
        console.log("Hi user!");
        res.status(200).send({message:"Hi user!"});
    }
};
 
 module.exports ={ api3 }; 