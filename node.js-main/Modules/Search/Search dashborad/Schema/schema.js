// ///////////////////////////////////////////////////////////////
// /// <==> /// This File Contains Search Module Schema /// <==> ///
// ///////////////////////////////////////////////////////////////

// /* =============== /// <==> Variables Declaration <==> /// =============== */
const mongoose= require('mongoose');
// /* =========== /// <==> End <==> ===========*/

// /* ================ /// <==> User Module Schema <==> /// ================= */
// eslint-disable-next-line new-cap
const BlogSchema = mongoose.Schema({
  name: {
    type: 'String',
    required: true,
  },
  followedTags: {
    type: [String],
  },
  isDeleted: {
    type: 'Boolean',
  },
}, {
  Timestamps: true,
});


const Posts = new mongoose.Schema({

  tags: [String],
}, {
  Timestamps: true,
});

// /* =========== /// <==> End <==> ===========*/


// /* ============== /// <==> Export User Module Schema <==> /// ============ */
module.exports = {
  blog: BlogSchema,
  post: Posts,
};

// /* =========== /// <==> End <==> ===========*/
