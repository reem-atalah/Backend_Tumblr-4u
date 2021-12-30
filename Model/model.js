/* eslint-disable linebreak-style */
// /////////////////////////////////////////////////////////
// / <==> /// This File Creates Collection /// <==> ///
// /////////////////////////////////////////////////////////

/* ================ /// <==> Variables Declaration <==> /// ================ */
const mongoose = require('mongoose');
const postSchema = require('../Schema/PostSchema');
const userSchema = require('../Schema/userSchema');
const blogSchema = require('../Schema/blogSchema');
const notesSchema = require('../Schema/notesSchema');
const notificationSchema = require('../Schema/notificationSchema');
const chatSchema = require('../Schema/chatSchema');
/* =========== /// <==> End <==> ===========*/

/* ================ /// <==> Create  Model <==> /// ================ */
const users = mongoose.model('Users', userSchema.userSchema);
const Posts = mongoose.model('Posts', postSchema.postSchema);
const blogs = mongoose.model('blogs', blogSchema.blogSchema);
const notes = mongoose.model('notes', notesSchema.notesSchema);
const notifications = mongoose.model('notifications', notificationSchema.notificaitonSchema);
const chat = mongoose.model('chat', chatSchema.chatSchema);
/* =========== /// <==> End <==> ===========*/

/* ================ /// <==> Export Model <==> /// ================ */
module.exports = {
  users,
  Posts,
  blogs,
  notes,
  notifications,
  chat
};
/* =========== /// <==> End <==> ===========*/
