const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));

app.get("/register" ,(req,res)=>{
    let {username , password} = req.query;
    res.send(`geytting GET request...WELCOME @${username}`);
    
})
app.post("/register" ,(req,res)=>{
    let {username , password} = req.body;
    res.send(`geytting POST request...WELCOME @${username}`);
    
})
app.listen(port , () => {
  console.log(`listing to the port ${port}`);
}
)