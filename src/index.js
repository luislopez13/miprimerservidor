const express = require("expess");
const app = express() ;

 //settings
app.set("port" ,3000 )


//middlewares


//routes

app.get("/", (req, res)=> {
    res.send("hello ");
})

//static files


//listening the server
app.liseten(app.get ("port"), () => {
    consol.log("server on port " );
});
    
    