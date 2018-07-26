const knex = require('../db/knex');
const vehicle = require('../controllers/vehicle.js');
const part = require('../controllers/part.js');
const user = require('../controllers/user.js');
//const router = express.Router();

module.exports = function(app){

app.get('/vehicle', vehicle.getAll)
app.get('/vehicle/:id',vehicle.getOne)
app.post('/vehicle',vehicle.createNew)
app.patch('/vehicle/:id',vehicle.updated)
app.delete('/vehicle/:id',vehicle.remove)

app.get('/part', part.getAll)
app.get('/part/:id',part.getOne)
app.post('/part',part.createNew)
app.patch('/part/:id',part.updated)
app.delete('/part/:id',part.remove)

app.get('/', user.login)

}