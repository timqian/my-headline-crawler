/**
 * get monthly headlines from week data
 * 1. 得到所有形如 2016/05/w* 的json
 * 2. 得到他们中 score 最高的 10 条
 * 3. 存到 2016/06/mm.json!!!
 */

import fs from 'fs'
import getGithubMonthly from './getGithubMonthly'
/**
 * @param {String} yearMonth (eg: '2016/05')
 */
async function getMonthlyHeadline(yearMonth) {

  // 所有 headline 聚集到同一个 object
  const weekHeadlines = fs.readdirSync(`./data/${yearMonth}`)
    .filter(fileName => {
      return fileName.slice(0, 1) === 'w'
    })
    .map(fileName => {
      return JSON.parse( fs.readFileSync(`./data/${yearMonth}/${fileName}`) )
    })
    .reduce((preHead, curHead) => {
      Object.keys(preHead).forEach(site => {
        preHead[site].push( ...curHead[site] )
      })
      return preHead
    })

    Object.keys(weekHeadlines).forEach(site => {
      // 排序
      weekHeadlines[site]
        .sort( (a, b) => {
          return Number(b.score) - Number(a.score)
        })

      // 去重
      for(let i = weekHeadlines[site].length - 1; i > 0; i--) {
        if (weekHeadlines[site][i].title === weekHeadlines[site][i-1].title) {
          weekHeadlines[site].splice(i, 1)
        }
      }

      // 拿 10 个
      weekHeadlines[site].splice(10)
    })
    console.log('going to fetch github monthly headline')
    // github
    weekHeadlines.github = await getGithubMonthly()
    console.log(weekHeadlines)
    return weekHeadlines
}

// test

// console.log( getMonthlyHeadline('2016/05') )

export default getMonthlyHeadline