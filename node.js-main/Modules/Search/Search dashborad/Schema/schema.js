// ///////////////////////////////////////////////////////////////
// /// <==> /// This File Contains Search Module Schema /// <==> ///
// ///////////////////////////////////////////////////////////////

// /* ====================== /// <==> Variables Declaration <==> /// ====================== */
const MONGOOSE = require('mongoose');
// /* =========== /// <==> End <==> ===========*/

// /* ====================== /// <==> User Module Schema <==> /// ====================== */
const BLOG_SCHEMA = MONGOOSE.Schema({
    name: {
        type: "String",
        required: true,
    },
    followedTags: {
        type: [String]
    },
    isDeleted: {
        type: "Boolean"
    }
}, {
    Timestamps: true,
});


const POST= new MONGOOSE.Schema({
    blog_id: {
        type: "String",
        required: true,
    },
    post_url: {
        type: "String",
        required: true,
    },
    tags: [String]
    }, {
    Timestamps: true,
});

// /* =========== /// <==> End <==> ===========*/


// /* ====================== /// <==> Export User Module Schema <==> /// ====================== */
module.exports = {
    BLOG: BLOG_SCHEMA,
    POST: POST
}

// /* =========== /// <==> End <==> ===========*/