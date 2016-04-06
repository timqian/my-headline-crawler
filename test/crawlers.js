import assert from 'assert'
import getHN from '../src/getHN'
import getReddit from '../src/getReddit'
import getMedium from '../src/getMedium'
import getV2 from '../src/getV2'


describe('test crawler', async () => {
  it('HN', async () => {
    const linkArray = await getHN();
    console.log(linkArray);
    assert.equal(linkArray.length, 10);
    assert.equal(typeof linkArray[1].title, 'string');
    assert.equal(typeof linkArray[0].url, 'string');
  })
  
  it('V2', async () => {
    const linkArray = await getV2();
    console.log(linkArray);
    assert.equal(typeof linkArray[1].title, 'string');
    assert.equal(typeof linkArray[0].url, 'string');
  })
  
  it('Medium', async () => {
    const linkArray = await getMedium();
    console.log(linkArray);
    assert.equal(linkArray.length, 10);
    assert.equal(typeof linkArray[1].title, 'string');
    assert.equal(typeof linkArray[0].url, 'string');
  })
  
  it('Reddit', async () => {
    const linkArray = await getReddit();
    console.log(linkArray);
    assert.equal(linkArray.length, 10);
    assert.equal(typeof linkArray[1].title, 'string');
    assert.equal(typeof linkArray[0].url, 'string');
  })

})
