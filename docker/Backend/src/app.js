import express from "express"

const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).json({
        message:"Health Check"
    })
})

app.get("/users",(req,res)=>{
    const users = [
        {id:1,name:"John Doe",email:"johnDoe@gmail.com"},
        {id:2,name:"Jane Doe",email:"JohnDoe@gmail.com"}
    ]
    res.status(200).json(users)
})

export default app;