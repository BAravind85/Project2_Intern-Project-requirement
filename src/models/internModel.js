const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId

const internSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    mobile: {
      type: Number,
      required: true,
      unique: true,
      trim:true
    },
    college: {
        type: objectId,
        ref: "College",
        trim:true
    },
    isDeleted: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);


module.exports = mongoose.model("Intern", internSchema);