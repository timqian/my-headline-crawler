// generate json file

import fs from 'fs'
import moment from 'moment'
import getDailyHeadline from './src/getDailyHeadline'

(async () => {

  // generate daily headline json file
  const dailyHeadline = await getDailyHeadline()
  fs.writeFileSync(`./data/${moment().format('YYYY/MM/DD')}.json`, JSON.stringify(dailyHeadline), 'utf8')
  console.log('write dailyHeadline succeed')


  // // generate weekly headline json file
  // if (/*周一*/) {
  //
  // }
  //
  // // generate monthly headline json file
  // if (/*月一*/) {
  //
  // }

})()
