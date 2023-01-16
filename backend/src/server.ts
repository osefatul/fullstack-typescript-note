import app from "./app"
import env from "./util/validateEnv";
import mongoose from "mongoose";



const PORT = env.PORT || 5000

mongoose.set('strictQuery', true);
console.log("Connected to MongoDB")
mongoose.connect(env.MONGO_URL).then(
).catch(err => console.error(err));


app.listen(PORT, ()=>{
    console.log("App listening on port", PORT)
})