import express from "express";

import "./database";

const app = express();

app.get("/", (request , response)=>{
    return response.json({
        message: "Welcome"
    })
})

app.listen(3000, () => console.log("Server is runing on port 3000"))