module.exports = {
  jwtSecret: process.env.JWT_SECRET || 'your secret',
  mongodbURI: process.env.MONGODB_URI || 'your mongodb url',
  port: process.env.PORT || 8080,
};
