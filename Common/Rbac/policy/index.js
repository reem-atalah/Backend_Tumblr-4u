// ////////////////////////////////////////////////////////////////
// // <==> This File Match Between Roles & Them EndPoints <==> ////
// ////////////////////////////////////////////////////////////////

/* ================= <-- Variables Declarations --> ================= */
const roles = require('../../Enum/roles');
const userPolicies = require('./userPolicies');
const adminPolicies = require('./adminPolicies');
const superAdminPolicies = require('./superAdminPolicies');
/* =========== <--> End <--> =========== */

/* ============== <-- Match Between Roles & Them EndPoints --> ============== */
const opts = {
  [roles.SUPER_ADMIN]: {
    can: superAdminPolicies,
  },
  [roles.ADMIN]: {
    can: adminPolicies,
  },
  [roles.USER]: {
    can: userPolicies,
  },
};
/* =========== <--> End <--> =========== */

/* ======================== <-- Export Options --> ======================== */
module.exports = opts;
/* =========== <--> End <--> =========== */
