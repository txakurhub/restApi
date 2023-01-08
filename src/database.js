import mongoose from "mongoose";

mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://localhost/andinadb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,    
  })
  .then((db) => console.log("DB is connected"))
  .catch((error) => console.log(error));
