import mongoose from "mongoose";

//mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.yy405.mongodb.net/myFirstDatabase`, {
mongoose.connect(`mongodb+srv://admin:nimda123@cluster0.yy405.mongodb.net/myFirstDatabase`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(db => console.log("Connected to database"))
  .catch(err =>console.log(err))