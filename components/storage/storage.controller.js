const mongoose = require('mongoose');
const config = require('../../config.json');

const connectionUri = `${config.mongopreuri + config.user}:${config.pass}${config.mongouri}`;
console.log ('connecting to ', connectionUri);

mongoose.Promise = global.Promise;

exports.connect = async function () {
  mongoose.connect(connectionUri, {
  		useMongoClient: true,
  });
};

exports.disconnect = async function () {
  mongoose.connection.close();
};

