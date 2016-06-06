import getGithub from './getGithub'
import getHN from './getHN'
import getMedium from './getMedium'
import getReddit from './getReddit'
import getV2 from './getV2'

export default async function getDailyHeadline() {
  const [HN, reddit, medium, github, v2ex] = await Promise.all([
    getHN(), getReddit(), getMedium(), getGithub(), getV2()
  ])

  return {HN, reddit, medium, github, v2ex}
}
