const aws = require('./aws');
const AWS = require('aws-sdk');

jest.mock('aws-sdk');

describe('aws', () => {
  describe('ec2', () => {
    it('can call describeInstances', async () => {
      const response = await aws.ec2.describeInstances('REQUEST');
      expect(response).toMatchSnapshot();
      expect(AWS.EC2().describeInstances.mock.calls).toMatchSnapshot();
    });
  });
});
