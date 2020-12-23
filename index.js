const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

app.use(body-Parser.json());
app.use(body-Parser.urlencoded({extended:true}));
app.use(cors());

app.get("/",()=>{
    resizeBy.send("welcome to my forma")
})

app.post("/api/forma", (req,res)=>{
    let data =req.body
    let smtpTransport = nodemailer.createTransport({
        service:"Gmail",
        port:465,
        auth:{
            user:"alimou@gamil.com",
            pass:"password"
        }
    });

let mailOptions={
    from:data.email,
    to:"alimou@gmail.com",
    subject:"Message from ${data.name}",
    html:`
    
    <h3>Informations</h3>
        <ul>
        
        <li>Name: ${data.name}</li>
        <li>Lastname: ${data.lastname}</li>
        <li>Email: ${data.email}</li>

        <h3>Message</h3>
        <p>${data.message}</p>
    
    `
};

smtpTransport.sendMail(mailOptions, (error,response)=>{
    if(error){
        res.send(error)
    }
    else{
        res.send("success")
    }
})

smtpTransport.close();

})

const PORT = process.env.PORT||3001;
app.listen(PORT,()=>{
    console.log(`server starting at port ${PORT}`);
})