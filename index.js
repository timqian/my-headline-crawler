// generate json file

import fs from 'fs'
import moment from 'moment'
import getDailyHeadline from './src/getDailyHeadline'

(async () => {
  const dailyHeadline = await getDailyHeadline()
  fs.writeFileSync(`./data/${moment().format('YYYY/MM/DD')}.json`, JSON.stringify(dailyHeadline), 'utf8')
  console.log('write dailyHeadline succeed')

})()
