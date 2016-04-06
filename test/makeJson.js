import makeJson from '../index'

describe('test makeJson', async () => {
  it('should return a json file', async () => {
    const json = await makeJson();
    console.log(json);
  });
});
