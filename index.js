const express = require("express")
const app = express()
const cors = require("cors")
const path = require('path');

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use(express.static(path.resolve(__dirname, './Client/public')));

app.get('/api',(req,res)=>{
    res.send("Alive")
})




app.use("/auth",require("./routes/jwtAuth"))

app.use("/dashboard",require("./routes/dashboard"))



app.listen(PORT,()=>{
    console.log("App is Running")
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'Client', 'public', 'index.html'));
  });