////////////////////////////////////////////////////////////////
//// <==> This File Contains All Post Module EndPoints <==> ////
////////////////////////////////////////////////////////////////

/* ======================== <-- User Modul EndPoints --> ======================== */
const Create_Post = 'Post:Create_Post';
const Edit_Post = 'Post:Edit_Post';
const Delete_Post = 'Post:Delete_Post';
const Get_Posts = 'Post:Get_Posts';
const Get_All_Posts = 'Post:Get_All_Posts';
const Block_Post = 'Post:Block_Post';

const postEndPoints = {
    Create_Post,
    Edit_Post,
    Delete_Post,
    Get_Posts,
    Get_All_Posts,
    Block_Post,
};
/* =========== <--> End <--> =========== */

/* ======================== <-- Export User EndPoints --> ======================== */
module.exports = postEndPoints;
/* =========== <--> End <--> =========== */