import mongoose from 'mongoose';



export const Connection =async (username , password) => {

    // const encodedUsername = encodeURIComponent(username);
    // const encodedPassword = encodeURIComponent(password);

    const URL = 'mongodb+srv://tanmaygoyaljpr111:microsoft9.@cluster0.r2dsv0w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

    try{
       await mongoose.connect( URL , { useUnifiedTopology: true, useNewUrlParser: true });
       console.log('Database connected successfully');
    }catch(error){
        console.log('Errow while connecting',error.message);
    }
};

export default Connection;



