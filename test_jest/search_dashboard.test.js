/* eslint-disable linebreak-style */
const search=require('../Modules/Search/Search dashborad/Controller/control');
jest.useFakeTimers();
// test for search hash tag
test('having a substring completes the hash tag', () => {
  setTimeout(() => {
    const ex=expect(search.autoCompleteSearchDash('Ra'));
    ex.toEqual( expect.arrayContaining(['/Rachel/i']));
  });
});

// test for search Mention Blogs
test('having a substring completes the mention blogs', () => {
  setTimeout(() => {
    const ex =expect(search.autoCompleteSearchDash('na'));
    ex.toEqual( expect.arrayContaining(['/Natasha/i']));
  });
});

// test for search Followed tags
test('having a substring completes the tags followed by user', () => {
  setTimeout(() => {
    const ex=expect(search.autoCompleteSearchDash('com'));
    ex.toEqual( expect.arrayContaining(['/compress/i']));
  });
});

// test for nothing in database
test('search somtheing does not exist in database', () => {
  setTimeout(() => {
    const ex=expect(search.autoCompleteSearchDash('dfhtjhrsj'));
    ex.toNotEqual( expect.arrayContaining(['/dfhtjhrsj/i']));
  });
});

// test for empty
test('write nothing and click search then nothing is retrieved', () => {
  setTimeout(() => {
    const ex=expect(search.autoCompleteSearchDash(''));
    ex.toNotEqual( expect.arrayContaining(['/compress/i']));
  });
});
