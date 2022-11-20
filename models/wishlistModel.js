
const mongoose = require("mongoose");
const Schema = mongoose.Schema


const wishlistSchema = new Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            require: [true, "Must have an userID"]
        },
        products: [
            {
                product:{
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product",
                }
            }]
    }
);

module.exports = mongoose.model("Wishlist", wishlistSchema);





