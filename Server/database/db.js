import mongoose from "mongoose";



export const Connection=async(username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@ecom-web.odvh7iw.mongodb.net/?retryWrites=true&w=majority`;

        try {
       await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
       console.log("Database Connected Successfully");
    } catch (error) {
        console.log("Error while connect with database",error.message);
    }
}

export default Connection;