
import fs from 'fs'
import getMonthlyHeadline from '../src/getMonthlyHeadline'


const monthlyHeadline = getMonthlyHeadline('2016/05')

fs.writeFileSync('./data/2016/05/mm.json', JSON.stringify(monthlyHeadline, null, 2))