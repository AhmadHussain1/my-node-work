const mongoose = require("mongoose");
const validator = require("validator");
// connect to mogodb
mongoose
  .connect("mongodb://localhost:27017/Afridi")
  .then(() => console.log("connected successfully"))
  .catch((err) => console.log("err"));

// define the schema for documents
const myproductSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  brand: { type: String, required: true },
  category: { type: String, required: true, enum: ["shirt", "pant"] },
  description: { type: String, required: true },
  price: {type: Number,required: true,
    validate(value) {
      if (value < 1) { throw new Error("price must be greater than 1") }
    }},
  email: {type:String,required:true,unique:true,
      validate(value){
        if(!validator.isEmail(value)){
            throw new Error("your email is invalid");
        }
      }},
  countInStock: { type: Number, required: true },
  rating: { type: Number, required: true },
  numReviews: { type: Number, required: true },
});
const MyProduct = new mongoose.model("MyProduct", myproductSchema);

// insert data into documents

const createDocument = async () => {
  try {
    const p1 = new MyProduct({
      name: "nike slim Shirt for boys",
      category: "shirt",
      price: 10,
      countInStock: 10,
      brand: "nike",
      rating: 4.5,
      email: 'ahmad@gmail.com',
      numReviews: 10,
      description: "high quality product",
    });
    // const p2 = new MyProduct({
    //   name: "Slim pant",
    //   category: "pant",
    //   price: 120,
    //   countInStock: 10,
    //   brand: "nike",
    //   rating: 4.5,
    //   numReviews: 10,
    //   description: "high quality product",
    // });
    // const p3 = new MyProduct({
    //   name: "addidas Slim pant",
    //   category: "pant",
    //   price: 113,
    //   countInStock: 15,
    //   brand: "addidas",
    //   rating: 2.5,
    //   numReviews: 19,
    //   description: "best quality product",
    // });
    // const p4 = new MyProduct({
    //   name: "nike shoes",
    //   category: "shoes",
    //   price: 720,
    //   countInStock: 5,
    //   brand: "nike",
    //   rating: 3.5,
    //   numReviews: 101,
    //   description: "high quality product",
    // });
    //     const p5 = new MyProduct({
    //       name: "puma Slim Pant",
    //       category: "pant",
    //       price: 65,
    //       countInStock: 15,
    //       brand: "puma",
    //       rating: 4.5,
    //       numReviews: 10,
    //       description: "high quality product",
    //     });
    //     const p6 = new MyProduct({
    //       name: "adidas Fit shirt",
    //       category: "shirt",
    //       price: 139,
    //       countInStock: 25,
    //       brand: "addidas",
    //       rating: 2.1,
    //       numReviews: 15,
    //       description: "high quality product",
    //     });
    const result = await MyProduct.insertMany([p1]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
createDocument();

//select data from database
// const getData = async () => {
//   try {
//     const result = await MyProduct.find({}).select({ name: 1 }).sort("name:1");
//     console.log(result);
//   } catch (error) {
//     console.log(err);
//   }
// };
// getData();

//update data
// const updateDocument = async (_id) => {
//   try {
//     const result = await MyProduct.updateOne(
//       { _id },
//       { $set: { name: "puma slim shirt" } }
//     );
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };
// updateDocument("61955f9461096b00bcf74967");

// delete data
// to only the nbr of dlt document =>  MyProduct.deletOne({ _id });
//to show the exact deleted document =>  MyProduct.findByIdAndDelete({ _id });
// const deleteDocument = async (_id) => {
//   try {
//     const result = await MyProduct.findByIdAndDelete({ _id });
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };
// deleteDocument("61954a0f7e52c2578209ba95");
