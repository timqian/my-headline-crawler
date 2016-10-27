import getGithub from './getGithub'
import getHN from './getHN'
import getMedium from './getMedium'
import getReddit from './getReddit'
import getV2 from './getV2'
import getProductHunt from './getProductHunt';

export default async function getDailyHeadline() {
  const [HN,  medium, github, productHunt, v2ex] = await Promise.all([
    getHN(),  getMedium(), getGithub(), getProductHunt(), getV2()
  ])

  return {HN,  medium, productHunt, github, v2ex}
}
