import getHeadlineOfRange from './getHeadlineOfRange'

export default async function (from, to, limit) {
  const [HN, medium, productHunt, v2ex] = await Promise.all([
    getHeadlineOfRange('HN', from, to, limit),
    // getHeadlineOfRange('reddit', from, to, limit),
    getHeadlineOfRange('medium', from, to, limit),
    getHeadlineOfRange('productHunt', from, to, limit),
    getHeadlineOfRange('v2ex', from, to, limit)
  ])

  return {HN, medium, v2ex, productHunt}
}
