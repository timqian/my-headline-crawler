import fs from 'fs'
import axios from './utils/aaxios.js'
import moment from 'moment'
import timeout from './utils/timeout'
import getDateRange from './utils/dateRange'
import config from './config'

/**
 * generate best posts in a date range
 *
 * @param  {String} site site name
 * @param  {String} from from date
 * @param  {String} to   to date
 * @param  {Number} num  number of posts
 * @return {Array}      Array of posts with score numbers
 *
 * @example
 *   getHeadlineOfRange('v2ex', '2016/05/24', '2016/06/01', 10) ==> [{title:.., url:.., score:..}, ...]
 */
async function getHeadlineOfRange(site, from, to, num) {

  // TODO: generate date range Array
  const dateRange = getDateRange(from, to)
  console.log(dateRange)

  // generate headline Array
  const headlineArray = []

  for (let date of dateRange) {
    const dayBest = JSON.parse( fs.readFileSync(`./data/${date}.json`) )[site]
    // dayBest.splice(5)  // 5 posts is enough for one day I think = = truth is：not!
    console.log(dayBest)

    for (let headline of dayBest) {
      console.log('headline.url', headline.url)

      let html
      try {
        const res = await axios.get(headline.url)
        html = res.data
        // console.log(html)
      } catch (e) {
        console.log(e)
        await timeout(2000)
        continue
      }

      console.log(`${site} html.length`, html.length)
      // V2EX 某些帖子需要登录才可见。参考： https://www.v2ex.com/t/183547
      try {
        // console.log(config)
        // console.log(config[site].scoreReg.exec(html)[1])
        // fs.writeFileSync('./sampleHtml/medium.html', html)
        console.log(config[site].scoreReg)
        const matchedScore = config[site].scoreReg.exec(html)[1]
        console.log(matchedScore)
        headline.score = Number( matchedScore.replace(/,/g, '') ) // For score like 1,234
      } catch (e) {
        headline.score = 0
      }
      console.log('score', headline.score)

      const length = headlineArray.length

      if (length === 0) {

        // initialize headlineArray
        headlineArray.push(headline)
      } else {

        // add headline into the right place of headlineArray
        // (类似插入排序) 参考：https://zh.wikipedia.org/wiki/插入排序
        let i = length - 1
        console.log('i', i)
        for (; i >= 0 && headline.score > headlineArray[i].score; i--) {
          headlineArray[i+1] = headlineArray[i]
        }
        headlineArray[i+1] = headline
      }

      // limit array length
      headlineArray.splice(num)

      await timeout(2000 + 4000 * Math.random())
    }

  }
  // console.log(headlineArray)

  return headlineArray
}

export default getHeadlineOfRange
