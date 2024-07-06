// src/data/index.js

const requireContext = require.context('./', false, /\.json$/);

const fileMappings = {};

requireContext.keys().forEach((fileName) => {
  const key = fileName.replace('./', '').replace('.json', '');
  fileMappings[key] = requireContext(fileName);
});

// Log the available keys for debugging purposes
console.log('Available keys in fileMappings:', Object.keys(fileMappings));

export default fileMappings;
