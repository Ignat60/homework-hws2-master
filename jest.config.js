module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  // Add the following line to handle ECMAScript Modules
  // You may need to adjust the pattern based on your file structure
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!(your-esm-module))"],
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy",
  },
};
