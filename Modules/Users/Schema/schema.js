// /////////////////////////////////////////////////////////////
// / <==> /// This File Contains User Module Schema /// <==> ///
// /////////////////////////////////////////////////////////////

/* ================ /// <==> Variables Declaration <==> /// ================= */
const mongoose = require('mongoose');
/* =========== /// <==> End <==> ===========*/

/* ================= /// <==> User Module Schema <==> /// ================== */
const userSchema = new mongoose.Schema({
  id: String,
  name: String,
  blogsId: [String],
  email: String,
  age: Number,
  favoriteblogs: [String],
  following_blogs: [String],
  // followers_blogs: [String],
  likes_posts_id: [String],
  // blocking_bblogs_id: [String],
  themeId: String,
  password: String,
  bodyColor: Number,
  isDeleted: Boolean,
  isVerified: Boolean,
});


/* =========== /// <==> End <==> ===========*/

/* ======================== <-- User Hooks --> ======================== */

/* ------------ Hashing Password In Sign Up ------------ */
userSchema.pre('save', async function() {
  this.password = await bcrypt.hash(this.password, 8);
  this.cpassword = await bcrypt.hash(this.cpassword, 8);
});

/* =========== <--> End <--> =========== */

/* =============== /// <==> Export User Module Schema <==> /// ============== */
module.exports = {userSchema};


/* =========== /// <==> End <==> ===========*/
