import axios from '../src/utils/aaxios'
import fs from 'fs'
(async () => {
  try {
    const res = await axios.get('https://www.reddit.com/r/programming/comments/4lq4ik/a_facebook_sixth_sense/')
    fs.writeFileSync('./sampleHtml/reddit1.html', res.data)
  } catch (e) {
    console.log('catched e', e)
  }

})()
