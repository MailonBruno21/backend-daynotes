const mongoose = require('mongoose')

const dbConfig = 'mongodb+srv://daynotes:daynotes@cluster0.dumrk.mongodb.net/annotations?retryWrites=true&w=majority'

const connection = mongoose.connect(dbConfig,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = connection