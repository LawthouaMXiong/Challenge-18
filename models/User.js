const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: "Username is Required",
      unique: true,
      trim: true,
    },

    email: {
      type: String,
      required: "Username is Required",
      unique: true,
      match: /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/,
    },

    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

const User = model("User", UserSchema);

module.exports = User;