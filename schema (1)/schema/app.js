const express=require("express")
const app=express()

const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config()
mongoose.connect(process.env.MONGO_URI).then(()=>console.log("DB Connected"))
const tumb=require("./routes/tumb")
app.get("/",tumb.hello)
app.get("/blog",tumb.createdb)
const port=8000
app.listen(port,()=>{
console.log(`A Node JS API is listening on port: ${port}`);
});
