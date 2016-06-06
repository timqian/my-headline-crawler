import fs from 'fs'

/**
 * Change fild name from `2016-06-12.json` to `12.json`
 */
fs.readdirSync('./data').forEach(year => {
  fs.readdirSync(`./data/${year}`).forEach(month => {
    fs.readdirSync(`./data/${year}/${month}`).forEach(day => {
      const newName = day.slice(-7)
      fs.rename(`./data/${year}/${month}/${day}`, `./data/${year}/${month}/${newName}`)
    })
  })
})
