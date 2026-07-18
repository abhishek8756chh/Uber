const mongoose=require("mongoose");

async function connectDB(){
  await mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB connected");
}
connectDB().catch((err)=>{
  console.log(err);
})
module.exports=connectDB;

