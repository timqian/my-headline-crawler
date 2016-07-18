/**
 * 1. 得到 日期数组
 * 2. 调用 getHeadlineOfRange()
 */
import moment from 'moment'
import fs from 'fs'
import getAllHeadlineOfRange from '../src/getAllHeadlineOfRange'
import getGithubWeekly from '../src/getGithubWeekly'

const dayArray = []
let startDay = moment('2016/07/17')

for (let i = 0; i < 7; i++) {
  dayArray.push(startDay.format('YYYY/MM/DD'))
  startDay.add(7, 'days')
}

// dayArray.forEach(sunday => {
//   console.log(sunday)
// })

(async () => {
  for (let sunday of dayArray) {
    const weekOfMonth = moment(sunday).day(-7).week() - moment(sunday).day(-7).startOf('month').week() + 1
    const fileName = `./data/${moment(sunday).day(-7).format('YYYY/MM')}/w${weekOfMonth}.json`
    console.log('fileName: ', fileName)

    const fromDate = moment(sunday).day(-7).format('YYYY/MM/DD')
    const toDate = moment(sunday).day(-1).format('YYYY/MM/DD')
    console.log(`from ${fromDate} to ${toDate}`)
    const weeklyHeadline = await getAllHeadlineOfRange(fromDate, toDate, 10)
    console.log('weeklyHeadline: ', weeklyHeadline)
    weeklyHeadline.github = await getGithubWeekly()
    fs.writeFileSync(fileName, JSON.stringify(weeklyHeadline, null, 2), 'utf8')
    console.log('weeklyHeadline wrote succeed')
  }
})()
