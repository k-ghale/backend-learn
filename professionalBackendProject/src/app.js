import express from "express"

const app = express()

connectDB()
.then(try{   } catch(e){.  })
.catch((err)=>{console.log(err)})