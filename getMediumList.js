import axios from 'axios';
import fs from 'fs';

axios.get('https://medium.com/top-stories')
  .then(res => {
    fs.writeFileSync('./sampleHtml/mediumListSample.html', res.data)
    console.log('success')
  })
  .catch(res => {
    console.log(res)
  })
