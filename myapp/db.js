const mongoose = require('mongoose');
const uri ='mongodb+srv://ivaniuss:ivan1234@cluster0.a1fpu.mongodb.net/project0?retryWrites=true&w=majority';

const connectDB = async () => {
  try{
     const conn = await mongoose.connect(uri,  {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log(`Bd conectada en ${conn.connection.host}`)
  }
  catch(err){
    console.error(err);
  }
 };
 module.exports = connectDB;