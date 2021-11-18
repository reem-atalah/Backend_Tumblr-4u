/////////////////////////////////////////////////////////////////////
/// <==> /// This File Is The Unit Testing OF Posts APIS  /// <==> ///
/////////////////////////////////////////////////////////////////////

/* ====================== /// <==> Variables Declaration <==> /// ====================== */

/* =========== /// <==> End <==> ===========*/


/* ====================== /// <==> Unit Testing <==> /// ====================== */
const { EXPECTATION_FAILED } = require('http-status-codes');
const { JsonWebTokenError } = require('jsonwebtoken');
const posts = require('../../Modules/Posts/Controller/control');
jest.useFakeTimers();

test('', () => {
    setTimeout(() => {
        expect(typeof posts.blogValidation() === 'boolean').toBeTruthy();
    })
});
/* =========== /// <==> End <==> ===========*/