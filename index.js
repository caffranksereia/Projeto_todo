const lowdb = require('lowdb')
const FileSync = require('lowdb/adapters/FileAsync')
const express = require('express')


const adapter = new FileSync('db.json')
const db = lowdb(adapter) 


//Create server
const app = express()
const port = 3000
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post('/Todo',(res,req)=>{

})



app.listen(port ,() =>{
    console.log(`Listen app at http:localhost:${port}`)
})