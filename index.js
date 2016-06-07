// generate json file

import fs from 'fs'
import moment from 'moment'
import getDailyHeadline from './src/getDailyHeadline'
import getAllHeadlineOfRange from './src/getAllHeadlineOfRange'

(async () => {
  // 
  // // generate daily headline json file
  // const dailyHeadline = await getDailyHeadline()
  // fs.writeFileSync(`./data/${moment().format('YYYY/MM/DD')}.json`, JSON.stringify(dailyHeadline), 'utf8')
  // console.log('write dailyHeadline succeed')
  //
  // // generate weekly headline json file
  // if (moment().day() === 0) {
    const fromDate = moment().day(-7).format('YYYY/MM/DD')
    const toDate = moment().day(-1).format('YYYY/MM/DD')
    console.log(`from ${fromDate} to ${toDate}`)
    const weeklyHeadline = await getAllHeadlineOfRange(fromDate, toDate, 10)
    console.log('weeklyHeadline: ', weeklyHeadline)
    const weekOfMonth = moment().day(-1).week() - moment().startOf('month').week() + 1
    const fileName = `./data/${moment().day(-1).format('YYYY/MM')}/w${weekOfMonth}.json`
    fs.writeFileSync(fileName, JSON.stringify(weeklyHeadline), 'utf8')
    console.log('weeklyHeadline wrote succeed')
  // }
  //
  // // generate monthly headline json file
  // if (moment().date() === 1) {
  //   const fromDate = moment().subtract(1, 'months').format('YYYY/MM/DD')
  //   const toDate = moment().subtract(1, 'days').format('YYYY/MM/DD')
  //   console.log(`from ${fromDate} to ${toDate}`)
  //   const monthlyHeadline = await getAllHeadlineOfRange(fromDate, toDate, 10)
  //   console.log('monthlyHeadline', monthlyHeadline)
  //   const fileName = `./data/${moment().subtract(1, 'months').format('YYYY/MM')}/m.json`
  //   fs.writeFileSync(fileName, JSON.stringify(monthlyHeadline), 'utf8')
  //   console.log('monthlyHeadline wrote succeed')
  // }

})()
