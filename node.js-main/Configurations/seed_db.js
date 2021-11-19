/* eslint-disable linebreak-style */
const searchSchema = require('../Modules/Search/Search dashborad/Model/model');
const faker = require('faker');

// seed blogs
// let seedDB= () => {
//     for (let i = 0; i < 10; i++) {
//         const search = new searchSchema.blogs({
//             name: faker.name.findName(),
//             followedTags: [faker.random.word()]
//         })

//         search.save()
//         .then(searchRef => {
//             console.log(`${searchRef.name} saved successfully`);
//         })
//     }
// }

// seed posts
const seedDB= () => {
  for (let i = 0; i < 10; i++) {
    const search = new searchSchema.Posts({
      tags: [faker.random.word(), faker.random.word(), faker.random.word()],
    });

    search.save()
        .then((searchRef) => {
          console.log(`${searchRef.name} saved successfully`);
        });
  }
};
// /* =============== /// <==> Export User Functions <==> /// =============== */
module.exports = {
  seedDB,
};
// /* =========== /// <==> End <==> ===========*/