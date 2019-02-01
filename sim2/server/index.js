const express = require('express');
require('dotenv').config();
const {json} = require('body-parser');
const massive = require('massive');
const app = express();
const PORT = process.env.SERVER_PORT;
const houseCtr = require('./controllers/house_controller')

app.use(json());
massive(process.env.CONNECTION_STRING)
.then((db) =>
{
    app.set('db', db);
})

//http requests
app.get('/api/houses', houseCtr.getHouses);
app.post('/api/houses', houseCtr.createHouse);
app.put('/api/houses/:id', houseCtr.updateHouse);
app.delete('/api/houses/:id', houseCtr.deleteHouse);

app.listen(PORT, () => console.log('listening on port', PORT));
