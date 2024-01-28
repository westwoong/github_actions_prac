const express = require('express')
const app = express()
const port = 3000;

app.get('/', (req, res) => {
    res.send('테스트 1231');
})

app.listen(port, () => {
    console.log(`${port} listen`)
})