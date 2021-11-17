const SEARCH_CONTROL = require('../Modules/Search/Search dashborad/Controller/control');
jest.useFakeTimers()

test('having a substring gives a list of strings contains it', () => {
  setTimeout(() => {
    expect(SEARCH_CONTROL.autoCompleteSearchDash('Ra')).toEqual( expect.arrayContaining(['/Rachel/i']));
  })
  });

// const chai= require("mocha");
//   describe("Search Dashboard /autoCompleteSearchDash", () =>{
//     it('having a substring gives a list of strings contains it', (done) =>{
//       chai.
//     })
//   })
