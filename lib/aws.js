const AWS = require('aws-sdk');

const ec2 = new AWS.EC2();

module.exports = {
  ec2: {
    describeInstances: async p => ec2.describeInstances(p).promise(),
  },
};
