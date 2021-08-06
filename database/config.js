const mongoose = require('mongoose')

const dbConnection = async () => {

    try {

        await mongoose.connect( process.env.MONGODB_ST, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        console.log('Database Init');

    } catch (error) {
        console.log(error);
        throw new Error('Error de incio a la DB');
    }

}


module.exports = {
    dbConnection
}