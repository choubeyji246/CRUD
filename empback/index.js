const express=require("express")
const connection=require("../sever/database/db.js")
const routes=require("./routes/route.js")
const cors=require("cors")
const bodyParser=require("body-parser")



const app=express()

const PORT=8000

connection();
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use("/",routes)

app.listen(PORT,()=> console.log(`server is running peacefully on port ${PORT}`))