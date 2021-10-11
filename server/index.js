const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())
const friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley", "Jacob"]
app.get("/api/users", (req, res) => {
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley", "Jacob"];
    res.status(200).send(friends);
  });

app.get("/weather/:temperature", (req, res) => {
    const { temperature } = req.params;
    const phrase = `<h1>It was ${temperature} today</h1>`;
    res.status(200).send(phrase);
  });

  app.get('/api/users', (req, res) => {
    if(req.query.item){
        const filteredItems = friends.filter(invItem => invItem.toLowerCase().includes(req.query.item.toLowerCase()))
        res.status(200).send(filteredItems)
    }else{
        res.status(200).send(friends)
    }
})

app.get('/api/users/:id', (req, res) => {
    console.log(req.params)
    const item = friends[+req.params.id]

    res.status(200).send(item)
})



app.listen(4000, () => console.log("server running on port 4000"))