/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
const schema = require('../Model/model');
const faker = require('faker');

// seed users
const seedDB= () => {
  for (let i = 0; i < 10; i++) {
    const search = new schema.users({
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      age: '21',
      city: faker.address.cityName(),
      country: faker.address.country(),
      following_blogs: [faker.random.word()],
      likes_posts_id: [faker.random.word()],
    });

    search.save()
        .then((searchRef) => {
          console.log(`${searchRef.name} saved successfully`);
        });
  }
};


// seed blogs
// const seedDB = () => {
//   for (let i = 0; i < 10; i++) {
//     const search = new schema.blogs({
//       blockedBlogs: [faker.name.findName(), faker.name.findName()],
//       followers: [faker.name.findName(), faker.name.findName()],
//       name: faker.name.findName(),
//       followedTags: [faker.random.word()],
//       password: faker.internet.password(),
//     });

//     search.save()
//         .then((searchRef) => {
//           console.log(`${searchRef.name} saved successfully`);
//         });
//   }
// };

// seed posts
// let seedDB = () => {
//   for (let i = 0; i < 10; i++) {
//     const search = new schema.Posts({
//       blogId: faker.random.word(),
//       postHtml: '</>',
//       type: 'text',
//       state: 'published',
//       tags: [faker.random.word(), faker.random.word(), faker.random.word()],
//     });

//     search.save()
//         .then((searchRef) => {
//           console.log(`${searchRef.name} saved successfully`);
//         });
//   }
// };
// /* =============== /// <==> Export User Functions <==> /// =============== */
module.exports = {
  seedDB,
};
// /* =========== /// <==> End <==> ===========*/
