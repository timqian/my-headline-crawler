import axios from 'axios'
import fs from 'fs'
(async () => {
  try {
    const res = await axios.get('https://medium.com/p/ask-ethan-why-does-space-appear-black-7a971c3e6be4')
    fs.writeFileSync('./sampleHtml/medium3.html', res.data)
  } catch (e) {
    console.log(e)
  }

})()
