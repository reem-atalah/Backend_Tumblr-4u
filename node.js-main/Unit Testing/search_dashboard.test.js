const searchControl = require('../Modules/Search/Search dashborad/Controller/control');
jest.useFakeTimers()

//test for search hash tag
test('having a substring completes the hash tag', () => {
  setTimeout(() => {
    expect(searchControl.autoCompleteSearchDash('Ra')).toEqual( expect.arrayContaining(['/Rachel/i']));
  })
  });

//test for search Mention Blogs
test('having a substring completes the mention blogs', () => {
  setTimeout(() => {
    expect(searchControl.autoCompleteSearchDash('na')).toEqual( expect.arrayContaining(['/Natasha/i']));
  })
});

//test for search Followed tags 
test('having a substring completes the tags followed by user', () => {
  setTimeout(() => {
    expect(searchControl.autoCompleteSearchDash('com')).toEqual( expect.arrayContaining(['/compress/i']));
  })
});

//test for nothing in database
test('search somtheing does not exist in database', () => {
  setTimeout(() => {
    expect(searchControl.autoCompleteSearchDash('dfhtjhrsj')).toNotEqual( expect.arrayContaining(['/dfhtjhrsj/i']));
  })
});

//test for empty 
test('write nothing and click search then nothing is retrieved', () => {
    setTimeout(() => {
    expect(searchControl.autoCompleteSearchDash('')).toNotEqual( expect.arrayContaining(['/compress/i']));
  })
});
