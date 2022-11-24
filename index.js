const express=require("express")
const app=express()
const cors=require("cors")
const bodyparser=require("body-parser")
const port=2003;
app.use(bodyparser.urlencoded({
	extended:true
}))
app.use(bodyparser.json())
app.use(cors())
app.get("/",(req,res)=>{
	res.send("this is postaction")
})
app.post("/newData",(req,res)=>{
	/*console.log(req.body)*/
	const {name,age}=req.body
	console.log("name and age is",name,age)
	res.send("Added successfully")
})
app.listen(port,()=>console.log("server is started"))