
import fs from 'fs'
import getMonthlyHeadline from '../src/getMonthlyHeadline'


const monthlyHeadline = getMonthlyHeadline('2016/06')

fs.writeFileSync('./data/2016/06/mm.json', JSON.stringify(monthlyHeadline, null, 2))