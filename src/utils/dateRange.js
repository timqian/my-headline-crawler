import moment from 'moment'

/**
 * dateRange('2016/05/29', '2016/06/02')
 *   ==> ['2016/05/29', '2016/05/30', '2016/05/31', 2016/06/01]
 *
 * @param  {String} from start date
 * @param  {String} to   end date
 * @return {Array}      Array of dates
 */
function dateRange(from, to) {
  const fromDate = moment(from, 'YYYY/MM/DD')
  const toDate = moment(to, 'YYYY/MM/DD')
  const dateArr = [fromDate.format('YYYY/MM/DD')]

  let nextDate = fromDate.add(1, 'day')
  while (moment.min(nextDate, toDate) === nextDate) {
    dateArr.push(nextDate.format('YYYY/MM/DD'))
    nextDate = nextDate.add(1, 'day')
  }

  return dateArr
}

export default dateRange
// console.log(dateRange('2016/05/29', '2016/06/02'))
