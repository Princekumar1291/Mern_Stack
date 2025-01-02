const path = require('path');
const rootDir = path.dirname(require.main.filename);
module.exports = rootDir;


// Feature                                         	require.main.filename	                                              process.cwd()
// Points To	                                       The directory of the entry module	                                  The current working directory
// Behavior in Testing	                             Can be inconsistent	                                                Consistent (if tests are run from the root)
// Dynamic Entry Points	                             Sensitive to changes	                                                Independent
// Subdirectory Execution	                           Works consistently	                                                  Depends on where node is running