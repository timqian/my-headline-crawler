
import fs from 'fs'
import getMonthlyHeadline from '../src/getMonthlyHeadline'

(async () => {
  const monthlyHeadline = await getMonthlyHeadline('2016/06')
  fs.writeFileSync('./data/2016/06/mm.json', JSON.stringify(monthlyHeadline, null, 2))
})()
