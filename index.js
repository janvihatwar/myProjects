const express=require("express");
const cors=require("cors");

const app=express();  //extracting express
app.use(cors());
const port=process.env.PORT || 3000; //adding port 


const apiData=require("./data.json"); //extracting data from data.json

app.get("/",(req,res)=>{
     res.send("hellow i am live");
});


app.get("/service",(req,res)=>{     //if user write /service in url then apiData shpuld be display
    res.send(apiData);
});

app.listen(port,()=>{
    console.log("i am live again");
});