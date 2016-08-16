import getHeadlineOfRange from '../src/getHeadlineOfRange'

describe('getHeadlineOfRange: headlines from date range', () => {
  it('v2ex', async () => {
    const headlines = await getHeadlineOfRange('v2ex', '2016/05/31', '2016/06/01', 10)
    console.log(headlines)
  })

  it('HN', async () => {
    const headlines = await getHeadlineOfRange('HN', '2016/08/08', '2016/08/14', 10)
    console.log(headlines)
  })

  it('medium', async () => {
    const headlines = await getHeadlineOfRange('medium', '2016/05/31', '2016/06/01', 10)
    console.log(headlines)
  })
  
  it('reddit', async () => {
    const headlines = await getHeadlineOfRange('reddit', '2016/05/31', '2016/06/01', 10)
    console.log(headlines)
  })

  it('productHunt', async () => {
    const headlines = await getHeadlineOfRange('productHunt', '2016/07/14', '2016/07/14', 10)
    console.log(headlines)
  });
  
})
