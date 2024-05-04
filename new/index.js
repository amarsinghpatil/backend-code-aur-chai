require('dotenv').config();

const express = require('express')
// Import an express framework and store it in express

const app = express()
//express functionality is stored in app

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) =>{
    res.send('hiteshdotcom')
})


app.listen(PROCESS.ENV.PORT,() => {
  console.log(`Example app listening on port ${port}`)
})

app.listen('/youtube',(req,res)=>{
    res.send('<h2> chau aur code <h2>')
})

app.get('/login', (req, res) =>{
    res.send('<h1> Please login at chai aur code </h1>')
})

/*
How to do this project
1. Type in npm init - this will make an node pakages manager application ready
2. Create an index.js
3. In Pakage.json file, "start":"node index.js"
4. Now install an express in terminal npm install express.
5. visit an Website upper section - in get started tab choose an hello world
6. Copy an all hello World example and paste it in index.js file
add whatever request you wanted to add
7. now this time stop the server and restart you will get an please login at chair aur code
ctrl + c to stop and to run an app  - npm run start

Problem faced when an Youtube request is made - Error is made
*/


