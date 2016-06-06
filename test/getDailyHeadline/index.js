import getDailyHeadline from '../../src/getDailyHeadline'
describe('getDailyHeadline', function () {
  it('index', async () => {
    const headlineObj = await getDailyHeadline()
    console.log(headlineObj)
  })
})
