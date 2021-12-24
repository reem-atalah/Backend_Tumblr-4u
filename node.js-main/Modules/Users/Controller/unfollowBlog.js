/* ----------- <---> Unfollow Blog <--->  */ // *** <===> Done <===>  *** //

const schema = require('../../../Model/model');
/**
 *
 * @function
 * @name unfollowBlog
 * @description this function removes the user whose id sent in
 *               params from followers of the blog whose id in the body
 * @param {String} email - The email of the user who unfollows the blog
 * @param {String} blogId - The id of the blog to be unfollowed
 * @returns {Object}  - The unfollowed blog
 */


const unfollowBlog = async (email, blogId) => {
  try {
    const blog = await schema.blogs.findOne({
      $and: [{_id: blogId},
        {isDeleted: false}],
    });
    const user = await schema.users.findOne({
      $and: [{email: email},
        {isDeleted: false}, {isVerified: true}],
    }, 'following_blogs');
    if (user) {
      if (blog) {
        blog.followers.pull(user._id);
        blog.save();
        let ids = user.following_blogs;
        ids.pull(blogId);
        await schema.users.findOneAndUpdate({email: email},
            {following_blogs: ids});
        console.log(user);
        return blog;
      }
      return null;
    }
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = {
  unfollowBlog,
};
