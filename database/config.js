const mongoose = require('mongoose')

const dbConnection =  () => {

    try {

        mongoose.connect( process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('Database Init');

    }catch (error) {
        console.log(error);
        throw new Error('Error de incio a la DB');
    }

}


module.exports = {
    dbConnection
}