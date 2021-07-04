const express = require('express')
const bodyParse = require('body-parser')
const app = express()

app.use(bodyParse())

let PORT = 3000

app.get('/box', (req, res) => {
    let box = {
        drug: 'марихуана'
    }
    res.send(box)
})

let arr = []

app.post('/input', (req, res) => {
    arr.push(req.body)
    console.log(arr)
    res.send()
})

app.listen(PORT , () => {
    try {
        console.log(`server has been strted on port ${PORT}`)
    } catch (error) {
        console.log(error)
    }
})