// Import the TypeScript sidebar and export just the array
const sidebarTs = require('./sidebar.ts');

// Export the actual sidebar items array, not the module object
module.exports = sidebarTs.default || sidebarTs;