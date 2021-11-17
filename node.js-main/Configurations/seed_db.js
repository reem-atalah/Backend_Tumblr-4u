const SEARCH_SCHEMA = require('../Modules/Search/Search dashborad/Model/model');
const faker = require('faker')

let seedDB= () => {
    for (let i = 0; i < 10; i++) {
        const search = new SEARCH_SCHEMA.POSTS({
            tags: [faker.name.findName(),faker.name.findName()]
        })
    
        search.save()
        .then(searchRef => {
            console.log(`${searchRef.tags} saved successfully`);
        })
    }
}

// /* ====================== /// <==> Export User Functions <==> /// ====================== */
module.exports = {
    seedDB
  };
  // /* =========== /// <==> End <==> ===========*/
