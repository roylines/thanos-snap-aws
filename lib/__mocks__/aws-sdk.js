const AWS = jest.genMockFromModule('aws-sdk');

// helper
const getImplementation = v => {
  const promise = jest.fn().mockResolvedValue(`${v}Response`);
  return jest.fn().mockReturnValue({promise});
};

// ec2
const describeInstances = getImplementation('describeInstances');
AWS.EC2.mockImplementation(() => {
  return {describeInstances};
});

module.exports = AWS;
