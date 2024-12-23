require('dotenv').config()
const express = require('express')

const app =express()
const port = process.env.PORT

app.get('/', (req, res) =>{
    res.send('Hello World')
});
app.get('/sanjay', (req,res) =>{
    res.send('Hello Sanjay ! good to see you')
})

app.get('/youtube', (req, res) => {
    res.send('<h1>welcome to my Yougoo')
})

app.listen(port, () =>{
    console.log(`App is running on port ${port}`)
})