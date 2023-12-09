const express = require('express')

const app = express()

app.use(express.static('public'))
// app.use("/",(req, res)=>{
//     return "<p>hello world</p>"
// })
let port = process.env.PORT || 8080
app.listen(port,()=>{
    console.log(`app is running on ${port}`)
})