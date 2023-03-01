const express = require('express')
const app = express()

app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
app.all('/users', (req, res) => {
    console.log("Just got a request!")
    res.send('users!')
})
app.all('/api', (req, res) => {

    console.log("Just got a request!")

    const db = process.env.DB_HOST
    res.send(db)
})
app.listen(process.env.PORT || 3000)