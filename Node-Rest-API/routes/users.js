const router = require("express").Router();
const User = require("../models/User");

router.get("/", async (req, res)=>{
    try{
        // To Do Mongo db
        // const users = await User.find();
        // !users && res.status(404).json("Users not found");
        res.status(200).json({
            firstName:"test",
            lastName:"test",
            emil:"test@test.com"
        });
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;