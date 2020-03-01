const mongoose = require('mongoose')
const url = "mongodb://heroku_x8kmrd20:rgco0s35rqt0u0fo9udrf143on@ds237267.mlab.com:37267/heroku_x8kmrd20" || "mongodb://127.0.0.1:27017/hygiene"
mongoose
    .connect(url, { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db