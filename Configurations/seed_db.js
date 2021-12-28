/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
const schema = require('../Model/model');
const faker = require('faker');
const postsFunctions = require('../Modules/Posts/Controller/control');
// seed users
// const seedDB= () => {
//   for (let i = 0; i < 10; i++) {
//     const search = new schema.users({
//       name: faker.name.findName(),
//       email: faker.internet.email(),
//       password: faker.internet.password(),
//       age: '21',
//       city: faker.address.cityName(),
//       country: faker.address.country(),
//       following_blogs: [faker.random.word()],
//       likes_posts_id: [faker.random.word()],
//     });

//     search.save()
//         .then((searchRef) => {
//           console.log(`${searchRef.name} saved successfully`);
//         });
//   }
// };


// seed blogs
// const seedDB= () => {
//   for (let i = 0; i < 5; i++) {
//     const search = new schema.blogs({
//       name: faker.name.findName(),
//       password: faker.internet.password(),
//       followedTags: [faker.random.word()],
//     });

//     search.save()
//         .then((searchRef) => {
//           console.log(`${searchRef.name} saved successfully`);
//         });
//   }
// };


// seed posts
const seedDB = () => {
  for (let i = 0; i < 5; i++) {
    blogId= '61c9e441b47e807b87e3dba9';
    postHtml= '<img width="100%" src="https://64.media.tumblr.com/59c510e0df411afe28a473cea2d4688d/0dc62628d204ab8c-83/s400x600/bf01b9297a94090eb252d52b0856da3c8af799ab.jpg" alt=""><p>Make sure to rest and drink enough water ♥ </p>';
    type= 'image';
    state= 'published';
    tags= [faker.radom.word(), faker.radom.word(), faker.radom.word()];

    postsFunctions.createPost(blogId, postHtml, type, state, tags);
  }

  //   for (let i = 0; i < 10; i++) {
  //     blogId= '61c9e2100ea834c610490b64';
  //     postHtml= '<img width="100%" src="https://64.media.tumblr.com/45dde30f17353eb13ca1be55063e3484/1ef148912162fc2f-7e/s400x600/739708b94fe41c6b50eee06fd95d8d08eeaa0cb4.jpg" alt="">';
  //     type= 'image';
  //     state= 'published';
  //     tags= ['CMP', 'ARTS', 'SCIENCE'];

  //   postsFunctions.createPost(blogId, postHtml, type, state, tags);

  // }

  // for (let i = 0; i < 10; i++) {
  //   blogId= '61c9e3a2b47e807b87e3db9d';
  //   postHtml= '<img width="100%" src="https://tumblrstorage.blob.core.windows.net/imagess/image2021-12-27T01-37-42.414Z.png" alt="">';
  //   type= 'image';
  //   state= 'published';
  //   tags= ['CMP', 'ARTS', 'SCIENCE'];

  // postsFunctions.createPost(blogId, postHtml, type, state, tags);

  // }

  // for (let i = 0; i < 10; i++) {
  //   blogId= '61c9e3cdb47e807b87e3dba2';
  //   postHtml= '<img width="100%" src="https://64.media.tumblr.com/35a13ef447be78b3c788db46fccba531/2683e2d8b1202812-f2/s400x600/7fab18f04e0464b61d566f0883109f930d6274a0.jpg" alt=""><img width="100%" src="https://64.media.tumblr.com/6de581d8cc0dabe8c30caf5c316b1e28/2683e2d8b1202812-99/s400x600/00de12543f36c67fdb1eda3d8ab1f9cd9ccf2671.jpg" alt=""><img width="100%" src="https://64.media.tumblr.com/0d26cdbcc83ecfc21240862339005bf5/2683e2d8b1202812-61/s400x600/32952990e61bb6af88fd7eb6edc04c76ae29568a.jpg" alt=""><img width="100%" src="https://64.media.tumblr.com/54f4dcdcd3226149234e33b5169f5cba/2683e2d8b1202812-31/s400x600/be6e8b3c8b39f36a575da53203627b0b84b1320d.jpg" alt="">';
  //   type= 'text';
  //   state= 'published';
  //   tags= ['CMP', 'ARTS', 'SCIENCE'];

  // postsFunctions.createPost(blogId, postHtml, type, state, tags);
  // }
};

// /* =============== /// <==> Export User Functions <==> /// =============== */
module.exports = {
  seedDB,
};
// /* =========== /// <==> End <==> ===========*/
