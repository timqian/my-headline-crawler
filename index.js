// generate json file

import fs from 'fs'
import moment from 'moment'
import getDailyHeadline from './src/getDailyHeadline'
import getAllHeadlineOfRange from './src/getAllHeadlineOfRange'
import getMonthlyHeadline from './src/getMonthlyHeadline';

(async () => {

  // generate daily headline json file
  const dailyHeadline = await getDailyHeadline()
  fs.writeFileSync(`./data/${moment().format('YYYY/MM/DD')}.json`, JSON.stringify(dailyHeadline, null, 2), 'utf8')
  console.log('write dailyHeadline succeed')

  // generate weekly headline json file
  // 周日在哪个月，这周就算哪个月的
  if (moment().day() === 0) {
    const weekOfMonth = moment().day(-7).week() - moment().day(-7).startOf('month').week() + 1
    const fileName = `./data/${moment().day(-7).format('YYYY/MM')}/w${weekOfMonth}.json`
    console.log(fileName)

    const fromDate = moment().day(-7).format('YYYY/MM/DD')
    const toDate = moment().day(-1).format('YYYY/MM/DD')
    console.log(`from ${fromDate} to ${toDate}`)
    const weeklyHeadline = await getAllHeadlineOfRange(fromDate, toDate, 10)
    console.log('weeklyHeadline: ', weeklyHeadline)
    fs.writeFileSync(fileName, JSON.stringify(weeklyHeadline, null, 2), 'utf8')
    console.log('weeklyHeadline wrote succeed')
  }

  generate monthly headline json file
  if (moment().date() === 7) {
    const month = moment().subtract(1, 'months').format('YYYY/MM')
    console.log(month);
    const monthlyHeadline = getMonthlyHeadline(month)
    fs.writeFileSync(`./data/${month}/mm.json`, JSON.stringify(monthlyHeadline, null, 2))
  }

})()
