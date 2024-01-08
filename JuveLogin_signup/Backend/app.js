const express=require("express");
const app=express();
const mongoose=require("mongoose");
const cors =require("cors");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
app.use(cors());
app.use(express.json());

require("./userDetails");

const JWT_SECRET="cavacuireashibuyaquandgojoseradescellermerrrrreeeeeonattendaussimakora";

//connection  a la base de donnes mongodb cree un cluster sur mongodb et remplacer cette url avec la votre tout en remplisant votre password et user name
const mongoUrl="mongodb+srv://UserName:Password@cluster0.ltkciqv.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoUrl,{
    useNewUrlParser:true
}).then(()=>{
    console.log("connected to database lord sukuna");
}).catch((e)=>console.log(e));


//creation du serveur
app.listen(5000,()=>{
    console.log("Extension du territoire serveur lancé");
})


//Gestion de la reception et la creation d'un utilisateur
const User= mongoose.model("UserInfo");
app.post("/register",async(req,res)=>{
    const {fname,lname,email, password}=req.body;
    const encryptedPassword=await bcrypt.hash(password,10);
    try{
        const olduser=await User.findOne({email});
        if(olduser){
            return res.send({error:"User Exist"});
        }
        await User.create({
            fname,
            lname,
            email,
            password:encryptedPassword,
        });
        res.send({status:"ok ca marche comme le batch veut"});
    }catch(error){
        res.send({status:"error"});
    }
});

app.post("/login_user",async(req,res)=>{

    const{email,password}=req.body;
    const user=await User.findOne({email});
    if(!user){
        return res.send({error:"User not found"});
    }
    if(await bcrypt.compare(password,user.password)){
        const token=jwt.sign({email:user.email},JWT_SECRET);

        if(res.status(201)){
            return res.json({status:"ok",data:token});
        }else {
            return res.json({error:"error"});
        }
    }
res.json({status:"error",error:"INVALID PASSWORD MERDEEE!!!! IDIOT"});
});

app.post("/userData", async (req, res) => {
    const { token } = req.body;
    try {
      const user = jwt.verify(token, JWT_SECRET);
      /*, (err, res) => {
        if (err) {
          return "token expired";
        }
        return res;
      });
      console.log(user);
      if (user == "token expired") {
        return res.send({ status: "error", data: "token expired" });
      }*/
  
      const useremail = user.email;
      User.findOne({ email: useremail })
        .then((data) => {
          res.send({ status: "ok", data:data });
        })
        .catch((error) => {
          res.send({ status: "error", data: error });
        });
    } catch (error) { }
  });
